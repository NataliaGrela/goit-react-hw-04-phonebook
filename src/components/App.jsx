import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    name: '',
    number: '',
    contacts: [],
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    const defaultContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    if (storedContacts) {
      let contacts = JSON.parse(storedContacts);
      if (contacts.length === 0){
        contacts = defaultContacts;
      };

      this.setState({
        contacts: contacts,
      });
    } else {
      this.setState({
        contacts: defaultContacts
      });
    }
  }

  handleChangeItem = (inputValue, value) => {
    this.setState({ [inputValue]: value });
  };

  handleFilter(filter) {
    this.setState({ filter });
  }

  handleAddContact() {
    if (!this.contactExists()) {
      const contacts = [
        ...this.state.contacts,
        {
          id: nanoid(),
          name: this.state.name,
          number: this.state.number,
        },
      ];
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.setState({
        contacts: contacts,
      });
    } else {
      alert(`${this.state.name} is already in contacts`);
    }
  }

  handleDeleteContact(id) {
    const contacts = [...this.state.contacts];
    const contactIndex = contacts.findIndex(item => item.id === id);
    contacts.splice(contactIndex, 1);
    this.setState({ contacts: contacts });
    console.log(contacts, contactIndex);
    localStorage.removeItem('contacts');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  contactExists() {
    return this.state.contacts.find(
      item => item.name.toUpperCase() === this.state.name.toUpperCase()
    );
  }

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>

        <ContactForm
          onAddContact={e => this.handleAddContact(e)}
          onChangeName={value => this.handleChangeItem('name', value)}
          onChangePhone={value => this.handleChangeItem('number', value)}
        />

        <h2>Contacts</h2>

        <Filter
          contacts={this.state.contacts}
          onChangeFilter={e => this.handleFilter(e)}
        />

        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDelete={id => this.handleDeleteContact(id)}
        />
      </div>
    );
  }
}

export default App;
