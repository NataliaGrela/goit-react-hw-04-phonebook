import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = filter
      ? contacts.filter(item =>
          item.name.toUpperCase().startsWith(filter.toUpperCase())
        )
      : contacts;
    return (
      <div>
        <ul>
          {filteredContacts.map(contact => (
            <ContactItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
              key={contact.id}
              onDelete={id => this.props.onDelete(id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
