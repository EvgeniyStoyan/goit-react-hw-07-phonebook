import React from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/phonebook';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={s.contacts_list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <p className={s.contact_text}>
              {name}: {number}
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
