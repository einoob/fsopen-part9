import { NewPatientEntry, Gender } from "./types";

const isString = (str: unknown): str is string => typeof str === "string" || str instanceof String;

const isDate = (str: string): boolean => Boolean(Date.parse(str));

const isGender = (str: string): str is Gender => {
  return Object.values(Gender)
    .map((gender) => gender.toString())
    .includes(str);
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect name");
  }
  return name;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("Incorrect ssn");
  }
  return ssn;
};

const parseDOB = (dob: unknown): string => {
  if (!dob || !isString(dob) || !isDate(dob)) {
    throw new Error("Incorrect date");
  }
  return dob;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Incorrect occupation");
  }
  return occupation;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect gender");
  }
  return gender;
};

const toNewPatientEntry = (patientObj: unknown): NewPatientEntry => {
  if (!patientObj || typeof patientObj !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in patientObj &&
    "ssn" in patientObj &&
    "dateOfBirth" in patientObj &&
    "occupation" in patientObj &&
    "gender" in patientObj
  ) {
    const newPatient: NewPatientEntry = {
      name: parseName(patientObj.name),
      ssn: parseSsn(patientObj.ssn),
      dateOfBirth: parseDOB(patientObj.dateOfBirth),
      occupation: parseOccupation(patientObj.occupation),
      gender: parseGender(patientObj.gender),
    };
    return newPatient;
  }
  throw new Error("Incorrect data: fields missing");
};

export default toNewPatientEntry;
