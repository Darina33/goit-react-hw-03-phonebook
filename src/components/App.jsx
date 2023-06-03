import React from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Filter from "./Filter";

export class App extends React.Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
      filter: '',
  }

  componentDidMount() { 
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const isExist = this.state.contacts.map(contact => contact.name === name).includes(true)

    if (isExist) {
  alert(`${name} is already in contacts.`);
  return
}
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

    getVisibleContacts = () => {
      const normalizedFilter = this.state.filter.toLowerCase();

      return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const addContact = this.addContact;
    const deleteContact = this.deleteContact;

    return <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.changeFilter} />
      <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
    };
}
