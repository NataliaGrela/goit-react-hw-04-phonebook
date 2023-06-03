import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  handleClick() {
    const { onAddContact } = this.props;
    onAddContact();
  }
  handleChangeName(e) {
    const { value } = e.currentTarget;
    const { onChangeName } = this.props;
    onChangeName(value);
  }
  handleChangePhone(e) {
    const { value } = e.currentTarget;
    const { onChangePhone } = this.props;
    onChangePhone(value);
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>Name</label>
          <input
            className={css.input}
            onChange={e => {
              this.handleChangeName(e);
            }}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.label}>Number</label>
          <input
            className={css.input}
            onChange={e => {
              this.handleChangePhone(e);
            }}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button
            type="submit"
            className={css.button}
            onClick={e => this.handleClick(e)}
          >
            Add contacts
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangePhone: PropTypes.func.isRequired,
};

export default ContactForm;
