
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./action";

const contactsInitialState = [];


export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
        return [...state, action.payload];
    },
    [deleteContact]: (state, action) => {
        return state.filter(
            contact => contact.id !== action.payload);
    },
       
           
    //     case 'contacts/filterContacts':
    //         return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normilizedFilter)
    // );
       
});

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {},
//   [deleteTask]: (state, action) => {},
//   [toggleCompleted]: (state, action) => {},
// });