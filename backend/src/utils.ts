import { NewPatientEntry, Gender } from "./types";

const isString = (str: unknown): str is string => typeof str === "string" || str instanceof String;

const isDate = (str: string): boolean => Boolean(Date.parse(str));

const isGender = (str: string): str is Gender => {
  return Object.values(Gender)
    .map((gender) => gender.toString())
    .includes(str);
};

const parseName = (name: unknown): string => {
  if (isString(name)) {
    return name;
  }
  throw new Error("Incorrect name");
};

const parseSsn = (ssn: unknown): string => {
  if (isString(ssn)) {
    return ssn;
  }
  throw new Error("Incorrect ssn");
};

const parseDOB = (dob: unknown): string => {
  if (!isString(dob) || !isDate(dob)) {
    throw new Error("Incorrect date");
  }
  return dob;
};

const parseOccupation = (occupation: unknown): string => {
  if (isString(occupation)) {
    return occupation;
  }
  throw new Error("Incorrect occupation");
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect gender");
  }
  return gender;
};

const toNewPatientEntry = (object: NewPatientEntry): NewPatientEntry => {
  const newPatient: NewPatientEntry = {
    name: parseName(object.name),
    ssn: parseSsn(object.ssn),
    dateOfBirth: parseDOB(object.dateOfBirth),
    occupation: parseOccupation(object.occupation),
    gender: parseGender(object.gender),
  };
  return newPatient;
};

export default toNewPatientEntry;
