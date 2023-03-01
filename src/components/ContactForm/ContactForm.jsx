import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledBtn } from './contactForm.styled';
import { StyledForm } from './contactForm.styled';

export function ContactForm (props) {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
  // setNumber({ [event.target.name]: event.target.value });
  // setName({ [event.target.name]: event.target.value });
  const { name, value } = event.target
  switch (name) {
    case 'name':
      setName(value);
      break;
      case 'number':
        setNumber(value);
        break;
        default:
          break;
  }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {name, number}
    props.onSubmit(contact);
    reset();
  };
  function reset () {
          setName('')
      setNumber('')
  };
    return (
      <>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor={nameInputId}>
            <span>Name </span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handleChange}
              id={nameInputId}
              required
            />
          </label>
          <label htmlFor={numberInputId}>
            <span> Number </span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={handleChange}
              id={numberInputId}
              required
            />
          </label>
          <StyledBtn type="submit">Add contact</StyledBtn>
        </StyledForm>
      </>
    );
}
 
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

