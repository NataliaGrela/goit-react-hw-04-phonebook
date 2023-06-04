import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ contacts, filter, onDelete }) => {
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
            onDelete={id => onDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
