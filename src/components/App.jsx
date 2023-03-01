import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import StyledContainer from './General.styled';

export function App() {
  return (
    <>
      <StyledContainer>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </StyledContainer>
    </>
  );
}
