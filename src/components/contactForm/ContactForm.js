import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter name"
            required // Makes this field mandatory
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            value={email}
            required // Makes this field mandatory
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input 
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="10 digits maximum"
            pattern="[1-9][0-9]{2}[1-9][0-9]{2}[0-9]{4}"
            value={phone}
            required // Makes this field mandatory
          />
        </div>
        {isDuplicate && <p style={{ color: 'red' }}>This contact already exists.</p>} {/* Show duplicate message */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
