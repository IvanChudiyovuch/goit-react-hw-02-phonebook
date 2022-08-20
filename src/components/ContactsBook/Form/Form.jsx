import { Component } from 'react';
import { Lable, Input } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleValueInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Lable htmlFor="">
          Name
          <Input
            value={this.state.name}
            onChange={this.handleValueInputChange}
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="
            Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Lable>

        <Lable htmlFor="">
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleValueInputChange}
            placeholder="+38(0__)_______"
          />
        </Lable>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
