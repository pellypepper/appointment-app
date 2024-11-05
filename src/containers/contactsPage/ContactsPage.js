import React, { useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  // State variables for contact info
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for duplicates before adding
    const duplicate = setIsDuplicate(contacts.some((contact) => contact.name === contactName));
    if (!duplicate) {
      addContact(contactName, phone, email);
      // Clear form fields
      setContactName('');
      setPhone('');
      setEmail('');
      setErrorMessage(''); // Clear any previous error messages
    } else {
      setErrorMessage('Duplicate contact. Please enter a different name.');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          handleSubmit={handleSubmit}
          name={contactName}
          setName={setContactName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          isDuplicate={isDuplicate}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
