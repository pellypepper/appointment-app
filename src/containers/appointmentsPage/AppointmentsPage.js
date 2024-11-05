import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ contacts, appointments, addAppointment }) => {
  // State variables for appointment info
  const [appointmentTitle, setAppointmentTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation: Ensure all fields are filled
    if (!appointmentTitle || !contact || !date || !time) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    
    // Clear any previous error messages
    setErrorMessage('');

    // Add appointment info
    addAppointment(appointmentTitle, contact, date, time);
    
    // Clear form fields
    setAppointmentTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <AppointmentForm 
          title={appointmentTitle}  // Changed from name to appointmentTitle for clarity
          setTitle={setAppointmentTitle} // Renamed for clarity
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts} // Assuming this is a list of contacts for selection
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={appointments} /> {/* Changed to appointments for clarity */}
      </section>
    </div>
  );
};
