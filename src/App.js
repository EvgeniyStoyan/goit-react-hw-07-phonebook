import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { connect } from 'react-redux';
import { contactsSelectors } from 'redux/phonebook';

function App({ contacts }) {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

export default connect(mapStateToProps, null)(App);
