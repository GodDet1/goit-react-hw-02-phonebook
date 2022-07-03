import { Component } from 'react';
import { nanoid } from 'nanoid';
import InputForm from './InputForm/InputForm';
import PhoneList from './PhoneList/PhoneList';
import Filter from './Filter/Filter';
import { Container, MyHeader } from './styled';

class App extends Component {
  state = {
    contacts: [
      { id: '123', name: 'fsdf', phone: '+31425367758' },
      { id: '154', name: 'fshgfdf', phone: '+31425367758' },
      { id: '15347623', name: 'fsdfsdf', phone: '+31425367758' },
      { id: '1347623', name: 'fscvbndf', phone: '+31425367758' },
      { id: '1153623', name: 'fskjkdf', phone: '+31425367758' },
    ],
    filter: '',
  };

  handleSubmitForm = (e, data) => {
    e.preventDefault();
    const item = { id: nanoid(), ...data };

    if (this.checkUsers(data)) {
      alert(`${data.name} is already in contacts`);
      return false;
    }

    this.setState(prevState => prevState.contacts.push(item));
    return true;
  };

  handleFilter = e => {
    const lowerCaseWord = e.currentTarget.value.toLowerCase();
    this.setState({
      filter: lowerCaseWord,
    });
  };

  checkUsers(data) {
    return this.state.contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
  }

  deleteUser = deletedId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== deletedId),
    });
  };

  filterUsers() {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter)
    );
  }

  render() {
    const renderData = this.filterUsers();

    return (
      <Container>
        <MyHeader>Phonebook</MyHeader>
        <InputForm handleSubmit={this.handleSubmitForm} />

        <MyHeader>Contacts</MyHeader>
        <Filter filter={this.handleFilter} value={this.state.filter} />
        <PhoneList contacts={renderData} deleteUser={this.deleteUser} />
      </Container>
    );
  }
}

export default App;
