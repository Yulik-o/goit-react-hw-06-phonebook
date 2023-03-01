import React, { useState } from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import StyledContainer from './General.styled';

export function App() {
  const [contacts, setContacts] = useState(
    getLocalData() ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  function getLocalData() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    return savedContacts;
  }
  useEffect(() => {
    // if (prevState.contacts !== contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = contact => {
    const isExist = contacts.some(({ name }) => {
      return contact.name === name;
    });
    if (isExist) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, { ...contact, id: nanoid() }]);
  };

  const deleteItem = event => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== event.target.id)
    );
  };
  const handleFilterChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );
  return (
    <>
      <StyledContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter onChange={handleFilterChange} value={filter} />
        <ContactList contacts={filteredContacts} handleDelete={deleteItem} />
      </StyledContainer>
    </>
  );
}
