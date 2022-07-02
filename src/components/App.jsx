import { Component } from 'react';
import { nanoid } from 'nanoid';
import InputForm from './InputForm/InputForm';
import PhoneList from './PhoneList/PhoneList';
import Filter from './Filter/Filter';
import { Container, MyHeader } from './styled';

class App extends Component {
  state = {
    contacts: [
      { id: '1', name: 'nikita Kolotenko', phone: '+3124424' },
      { id: '2', name: 'marina Palamarchuk', phone: '+312423423424' },
      { id: '3', name: 'Danylo kolotenko', phone: '+312423423424' },
      { id: '5', name: 'Ilya Beliy', phone: '+312423423424' },
      { id: '6', name: 'Ira Belaya', phone: '+312423423424' },
    ],
    filter: '',
  };

  handleSubmitForm = (e, data) => {
    e.preventDefault();
    const item = { id: nanoid(), ...data };

    if (this.checkUsers(data)) {
      return alert(`${data.name} is already in contacts`);
    }

    this.setState(prevState => prevState.contacts.push(item));
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

  deleteUser = id => {
    const index = this.state.contacts.findIndex(item => item.id === id);

    this.setState(prevState => prevState.contacts.splice(index, 1));
  };

  filterUsers() {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter)
    );
  }

  render() {
    const renderData =
      this.state.filter !== '' ? this.filterUsers() : this.state.contacts;

    return (
      <Container>
        <MyHeader>Phonebook</MyHeader>
        <InputForm handleSubmit={this.handleSubmitForm} />

        <MyHeader>Contacts</MyHeader>
        <Filter filter={this.handleFilter} />
        <PhoneList contacts={renderData} deleteUser={this.deleteUser} />
      </Container>
    );
  }
}

export default App;
