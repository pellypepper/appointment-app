import React from "react";

const ContactPicker = ({ contacts, onChange, name, value }) => {
  return (
    <div>
      <label htmlFor={name}>Select a Contact:</label>
      <select id={name} value={value} name={name} onChange={onChange} required>
        <option value="">No Contact Selected</option>
        {contacts.map((contact) => (
          <option value={contact.id} key={contact.id}>
            {contact.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContactPicker;
