import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ onDelete, id, number, name }) => {
  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
