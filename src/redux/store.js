import { configureStore } from '@reduxjs/toolkit';
import { contacsReduser } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contacsReduser,
  }
});
