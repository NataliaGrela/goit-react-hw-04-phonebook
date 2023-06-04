import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ onAddContact, onChangeName, onChangePhone }) => {
  const handleChangeName = e => {
    const { value } = e.currentTarget;
    onChangeName(value);
  };

  const handleChangePhone = e => {
    const { value } = e.currentTarget;
    onChangePhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          onChange={handleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label}>Number</label>
        <input
          className={css.input}
          onChange={handleChangePhone}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" className={css.button} onClick={onAddContact}>
          Add contacts
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangePhone: PropTypes.func.isRequired,
};

export default ContactForm;
