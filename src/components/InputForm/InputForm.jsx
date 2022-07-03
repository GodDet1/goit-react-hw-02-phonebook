import { Component } from 'react';
import PropTypes from 'prop-types';
import { MyForm, MyInput } from './styled';

class InputMyForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleInput = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render = () => {
    return (
      <MyForm
        onSubmit={e => {
          const newUser = this.props.handleSubmit(e, this.state);

          if (newUser) {
            this.setState({ name: '', phone: '' });
          }
        }}
      >
        <h2>Name</h2>
        <MyInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name surname"
          value={this.state.name}
          required
          onChange={this.handleInput}
        />
        <h2>Phone</h2>
        <MyInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="+38 (063) 123-45-67"
          value={this.state.phone}
          required
          onChange={this.handleInput}
        />

        <button type="submit">Add contact</button>
      </MyForm>
    );
  };
}

InputMyForm.propTypew = {
  handleSubmit: PropTypes.func.isRequired,
};

export default InputMyForm;
