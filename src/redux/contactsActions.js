import { createAction } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const addContact = createAction('contacts/add', (userName, userNumber) => ({
    payload: {
    id: nanoid(),
      userName,
      userNumber,
    }
}))

const removeContact = createAction('contacts/remove');

const filterContaсts = createAction('contacts/filter');

export default {addContact, removeContact, filterContaсts};