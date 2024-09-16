"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';  // Import the new hook for reading query params
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const section = searchParams.get('section');  // Get the 'section' query parameter

  const [patients, setPatients] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientCondition, setPatientCondition] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(section || "Patients");  // Set section based on query param

  const [appointments, setAppointments] = useState([]);
  const [appointmentName, setAppointmentName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isEditingAppointment, setIsEditingAppointment] = useState(false);
  const [editingAppointmentIndex, setEditingAppointmentIndex] = useState(null);

  const [billings, setBillings] = useState([]);
  const [billingPatientName, setBillingPatientName] = useState("");
  const [billingAmount, setBillingAmount] = useState("");
  const [isEditingBilling, setIsEditingBilling] = useState(false);
  const [editingBillingIndex, setEditingBillingIndex] = useState(null);

  // Load data from localStorage
  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(storedPatients);

    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);

    const storedBillings = JSON.parse(localStorage.getItem("billings")) || [];
    setBillings(storedBillings);
  }, []);

  // Add or update patient
  const addOrUpdatePatient = () => {
    if (!patientName || !patientAge || !patientCondition) {
      alert("Please fill all fields");
      return;
    }

    if (isEditing) {
      const updatedPatients = [...patients];
      updatedPatients[editingIndex] = {
        name: patientName,
        age: patientAge,
        condition: patientCondition,
      };
      setPatients(updatedPatients);
      localStorage.setItem("patients", JSON.stringify(updatedPatients));
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      const newPatients = [
        ...patients,
        { name: patientName, age: patientAge, condition: patientCondition },
      ];
      setPatients(newPatients);
      localStorage.setItem("patients", JSON.stringify(newPatients));
    }

    setPatientName("");
    setPatientAge("");
    setPatientCondition("");
  };

  // Add or update appointment
  const addOrUpdateAppointment = () => {
    if (!appointmentName || !appointmentDate || !appointmentTime) {
      alert("Please fill all fields");
      return;
    }

    if (isEditingAppointment) {
      const updatedAppointments = [...appointments];
      updatedAppointments[editingAppointmentIndex] = {
        name: appointmentName,
        date: appointmentDate,
        time: appointmentTime,
      };
      setAppointments(updatedAppointments);
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
      setIsEditingAppointment(false);
      setEditingAppointmentIndex(null);
    } else {
      const newAppointments = [
        ...appointments,
        { name: appointmentName, date: appointmentDate, time: appointmentTime },
      ];
      setAppointments(newAppointments);
      localStorage.setItem("appointments", JSON.stringify(newAppointments));
    }

    setAppointmentName("");
    setAppointmentDate("");
    setAppointmentTime("");
  };

  // Add or update billing
  const addOrUpdateBilling = () => {
    if (!billingPatientName || !billingAmount) {
      alert("Please fill all fields");
      return;
    }

    if (isEditingBilling) {
      const updatedBillings = [...billings];
      updatedBillings[editingBillingIndex] = {
        patientName: billingPatientName,
        amount: billingAmount,
      };
      setBillings(updatedBillings);
      localStorage.setItem("billings", JSON.stringify(updatedBillings));
      setIsEditingBilling(false);
      setEditingBillingIndex(null);
    } else {
      const newBillings = [
        ...billings,
        { patientName: billingPatientName, amount: billingAmount },
      ];
      setBillings(newBillings);
      localStorage.setItem("billings", JSON.stringify(newBillings));
    }

    setBillingPatientName("");
    setBillingAmount("");
  };

  // Delete patient, appointment, and billing
  const deletePatient = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
    localStorage.setItem("patients", JSON.stringify(updatedPatients));
  };

  const deleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const deleteBilling = (index) => {
    const updatedBillings = billings.filter((_, i) => i !== index);
    setBillings(updatedBillings);
    localStorage.setItem("billings", JSON.stringify(updatedBillings));
  };

  // Edit patient, appointment, and billing
  const editPatient = (index) => {
    const patientToEdit = patients[index];
    setPatientName(patientToEdit.name);
    setPatientAge(patientToEdit.age);
    setPatientCondition(patientToEdit.condition);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const editAppointment = (index) => {
    const appointmentToEdit = appointments[index];
    setAppointmentName(appointmentToEdit.name);
    setAppointmentDate(appointmentToEdit.date);
    setAppointmentTime(appointmentToEdit.time);
    setIsEditingAppointment(true);
    setEditingAppointmentIndex(index);
  };

  const editBilling = (index) => {
    const billingToEdit = billings[index];
    setBillingPatientName(billingToEdit.patientName);
    setBillingAmount(billingToEdit.amount);
    setIsEditingBilling(true);
    setEditingBillingIndex(index);
  };

  // Render different sections based on activeSection
  const renderSection = () => {
    if (activeSection === "Patients") {
      return (
        <>
          <div className={styles.formContainer}>
            <h2>{isEditing ? "Edit Patient" : "Add Patient"}</h2>
            <input
              type="text"
              value={patientName}
              placeholder="Patient Name"
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            <input
              type="number"
              value={patientAge}
              placeholder="Patient Age"
              onChange={(e) => setPatientAge(e.target.value)}
              required
            />
            <input
              type="text"
              value={patientCondition}
              placeholder="Condition"
              onChange={(e) => setPatientCondition(e.target.value)}
              required
            />
            <div className={styles.addBilling}>
              <button onClick={addOrUpdatePatient}>
                {isEditing ? "Update Patient" : "Add Patient"}
              </button>
            </div>
          </div>

          <div className={styles.patientListContainer}>
            <h2>Patient Info Stored</h2>
            <ul>
              {patients.map((patient, index) => (
                <li key={index}>
                  <span>
                    <b>Name:</b> {patient.name} <br /> <b>Age:</b> {patient.age}{" "}
                    <br /> <b>Condition:</b> {patient.condition}
                  </span>
                  <div className={styles.btnFlex}>
                    <button onClick={() => editPatient(index)} className={styles.editBTN}>Edit</button>
                    <button onClick={() => deletePatient(index)} className={styles.deleteBTN}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    } else if (activeSection === "Appointments") {
      return (
        <>
          <div className={styles.formContainer}>
            <h2>{isEditingAppointment ? "Edit Appointment" : "Book Appointment"}</h2>
            <input
              type="text"
              value={appointmentName}
              placeholder="Patient Name"
              onChange={(e) => setAppointmentName(e.target.value)}
              required
            />
            <input
              type="date"
              value={appointmentDate}
              placeholder="Appointment Date"
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
            <input
              type="time"
              value={appointmentTime}
              placeholder="Appointment Time"
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            <div className={styles.addBilling}>
              <button onClick={addOrUpdateAppointment}>
                {isEditingAppointment ? "Update Appointment" : "Book Appointment"}
              </button>
            </div>
          </div>

          <div className={styles.appointmentListContainer}>
            <h2>Appointments List</h2>
            <ul>
              {appointments.map((appointment, index) => (
                <li key={index}>
                  <span>
                    <b>Patient Name:</b> {appointment.name} <br />
                    <b>Date:</b> {appointment.date} <br />
                    <b>Time:</b> {appointment.time}
                  </span>
                  <div className={styles.btnFlex}>
                    <button onClick={() => editAppointment(index)} className={styles.editBTN }>Edit</button>
                    <button onClick={() => deleteAppointment(index)} className={styles.deleteBTN}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    } else if (activeSection === "Billing") {
      return (
        <>
          <div className={styles.formContainer}>
            <h2>{isEditingBilling ? "Edit Billing" : "Add Billing"}</h2>
            <input
              type="text"
              value={billingPatientName}
              placeholder="Patient Name"
              onChange={(e) => setBillingPatientName(e.target.value)}
              required
            />
            <input
              type="number"
              value={billingAmount}
              placeholder="Amount"
              onChange={(e) => setBillingAmount(e.target.value)}
              required
            />
            <div className={styles.addBilling}>
              <button onClick={addOrUpdateBilling}>
                {isEditingBilling ? "Update Billing" : "Add Billing"}
              </button>
            </div>
          </div>

          <div className={styles.billingListContainer}>
            <h2>Billing Information</h2>
            <ul>
              {billings.map((billing, index) => (
                <li key={index}>
                  <span>
                    <b>Patient Name:</b> {billing.patientName} <br />
                    <b>Amount:</b> ${billing.amount}
                  </span>
                  <div className={styles.btnFlex}>
                    <button onClick={() => editBilling(index)} className={styles.editBTN}>Edit</button>
                    <button onClick={() => deleteBilling(index)} className={styles.deleteBTN}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    }
  };

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.sidebar}>
        <ul>
          <li onClick={() => setActiveSection("Patients")}>Patients</li>
          <li onClick={() => setActiveSection("Appointments")}>Appointments</li>
          <li onClick={() => setActiveSection("Billing")}>Billing</li>
        </ul>
      </div>

      <div className={styles.mainContent}>
        <h1>Healthcare <br /> Center Dashboard</h1>
        {renderSection()}
      </div>
    </div>
  );
}
