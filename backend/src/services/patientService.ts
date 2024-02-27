import patientData from "../db/patients";
import { NewPatientEntry, Patient, PatientDataWithoutSSn } from "../types";

const patients: Array<Patient> = patientData;

const getEntries = (): Patient[] => patients;

const getEntriesWithoutSsn = (): PatientDataWithoutSSn[] => {
  return patients.map(({ id, dateOfBirth, name, occupation, gender, entries }) => ({
    id,
    dateOfBirth,
    name,
    occupation,
    gender,
    entries
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const id: string = String(Math.floor(Math.random() * 100000));
  const newPatient = {
    id,
    ...entry,
  };
  patientData.push(newPatient);
  console.log(patientData);

  return newPatient;
};

const getOnePatient = (id: string): Patient | undefined => {
  console.log(patients);
  return patients.find((patient) => patient.id === id);
};

export default {
  getEntries,
  getEntriesWithoutSsn,
  addPatient,
  getOnePatient,
};
