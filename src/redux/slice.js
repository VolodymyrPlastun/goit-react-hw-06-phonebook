import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const initialState = {
// contacts: {
    items: [],
    filter: ''
//   }
}

export const mySlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact(state, action) {
            // console.log(action);
    const contact = {
      id: nanoid(),
      userName: action.payload.userName,
      userNumber: action.payload.userNumber,
            }
             console.log(state.items.userName);
console.log(contact.userName);
    if (state.items.userName === contact.userName) {
return alert(`${state.items.userName} is already in contacts`);
    } else {
      state.items = [...state.items, contact]
    }   
           
        // if (state.items.userName.toLowerCase() === action.payload.userName) {
        //     
        // }
       
        },
        removeContact(state, action) {
            
          return  state.items.filter(item => item.id !== action.payload.id)
            // state.items.filter(item => console.log(item))
        },
        filterContart(state, action) {
const normalizedStr = state.filter.toLocaleLowerCase();
    return state.items.filter(item => item.userName.toLocaleLowerCase().includes(normalizedStr))
        },
    }
})

export const { addContact, removeContact, filterContart } = mySlice.actions;