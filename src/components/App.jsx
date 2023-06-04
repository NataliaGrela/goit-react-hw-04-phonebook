import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const defaultContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    if (storedContacts) {
      let contacts = JSON.parse(storedContacts);
      if (contacts.length === 0) {
        contacts = defaultContacts;
      }
      setContacts(contacts);
    } else {
      setContacts(defaultContacts);
    }
  }, []);

  const handleFilter = filter => {
    setFilter(filter);
  };

  const handleAddContact = () => {
    if (!contactExists()) {
      const newContacts = [
        ...contacts,
        {
          id: nanoid(),
          name: name,
          number: number,
        },
      ];
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      setContacts(newContacts);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const handleDeleteContact = id => {
    const contactsToDelete = [...contacts];
    const contactIndex = contactsToDelete.findIndex(item => item.id === id);
    contactsToDelete.splice(contactIndex, 1);
    setContacts(contactsToDelete);
    // console.log(contacts, contactIndex);
    localStorage.removeItem('contacts');
    localStorage.setItem('contacts', JSON.stringify(contactsToDelete));
  };

  const contactExists = () => {
    return contacts.find(
      item => item.name.toUpperCase() === name.toUpperCase()
    );
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>

      <ContactForm
        onAddContact={handleAddContact}
        onChangeName={value => setName(value)}
        onChangePhone={value => setNumber(value)}
      />

      <h2>Contacts</h2>

      <Filter contacts={contacts} onChangeFilter={handleFilter} />

      <ContactList
        filter={filter}
        contacts={contacts}
        onDelete={handleDeleteContact}
      />
    </div>
  );
};

export default App;
