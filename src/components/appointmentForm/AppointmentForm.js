import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handleContactChange = (event) => {
    setContact(event.target.value); // Now this will be the contact's id
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="appointment-title">Appointment Name:</label>
        <input
          id="appointment-title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Enter appointment name"
          required
        />
      </div>
      <div  style={{display: 'flex', flexDirection:"column"}}>
        <label htmlFor="appointment-date">Date:</label>
        <input
          id="appointment-date"
          onChange={(e) => setDate(e.target.value)}
          type="date"
          value={date}
          min={getTodayString()}
          required
        />
      </div>
      <div style={{display: 'flex', flexDirection:"column"}}>
        <label htmlFor="appointment-time">Time:</label>
        <input
          id="appointment-time"
          onChange={(e) => setTime(e.target.value)}
          type="time"
          value={time}
          required
        />
      </div>
      <div className="label-contact">
        <label className="label-contact" htmlFor="appointment-contact">Contact:</label>
        <ContactPicker
  contacts={contacts}
  name="contact"
  value={contact}
  onChange={handleContactChange}
/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
