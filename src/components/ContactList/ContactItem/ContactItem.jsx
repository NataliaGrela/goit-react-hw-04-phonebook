import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ContactItem.module.css';

class ContactItem extends Component {
  handleClick() {
    const { onDelete, id } = this.props;
    onDelete(id);
  }
  render() {
    const { name, number } = this.props;
    return (
      <li className={css.item}>
        {name}: {number}
        <button className={css.button} onClick={() => this.handleClick()}>
          Delete
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
