import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListOfContact, ContactItem } from './ContactList.styled';
import { getVisibleContacts } from 'components/redux/selectors';
import { deleteContact } from 'components/redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ListOfContact>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => {
              handleDelete(contact.id);
            }}
          >
            Delete
          </button>
        </ContactItem>
      ))}
    </ListOfContact>
  );
};
