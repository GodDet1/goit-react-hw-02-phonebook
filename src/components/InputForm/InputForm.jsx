import { Component } from 'react';

class InputForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleIput = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render = () => {
    return (
      <form onSubmit={e => this.props.handleSubmit(e, this.state)}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleIput}
        />
        <h2>Phone</h2>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleIput}
        />

        <button type="submit">add contact</button>
      </form>
    );
  };
}

export default InputForm;
