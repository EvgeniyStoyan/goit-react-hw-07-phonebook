import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  changeFilter,
  fetchContactsError,
  fetchContactsSuccess,
  fetchContactsRequest,
  addContactError,
  addContactSuccess,
  addContactRequest,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

// const fetchData = async () => {
//   try {
//     dispatch(loaderOn());
//     dispatch(fetchData());
//     dispatch(loaderOff());
//   } catch (err) {
//     dispatch(loaderOff());
//   }
// };

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, action) => action.payload,
  [addContactError]: (_, action) => action.payload,
  [deleteContactError]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  loading,
  filter,
  error,
});

// const items = createReducer([], {
//   [fetchContacts.pending]: (_, action) => action.payload,
//   [fetchContacts.fulfilled]: (state, { payload }) => [...state, payload],
//   [fetchContacts.rejected]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// });
