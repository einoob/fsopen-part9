import patientData  from "../db/patients";

import { Patient, PatientDataWithoutSSn } from "../types";

const patients: Array<Patient> = patientData;

const getEntries = (): Patient[] => patients;

const getEntriesWithoutSsn = (): PatientDataWithoutSSn[] => {
  return patients.map(({ id, dateOfBirth, name, occupation, gender }) => ({
    id,
    dateOfBirth,
    name,
    occupation,
    gender,
  }));
};

export default {
  getEntries,
  getEntriesWithoutSsn
};
