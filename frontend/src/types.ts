export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

export type EntryType =  "Hospital" | "OccupationalHealthcare" | "HealthCheck";

export interface Entry {
  id: string;
  date: string;
  type: "Hospital" | "OccupationalHealthcare" | "HealthCheck";
  specialist: string;
  description: string;
  diagnosisCodes?: Array<string>;
  employerName?: string;
}

export interface HospitalEntry extends Entry {
  type: "Hospital";
  discharge: {
    date: string;
    criteria: string;
  }
}

export interface OccupationalHealthcareEntry extends Entry {
  type: "OccupationalHealthcare";
  employerName?: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  };
}

export interface HealthCheckEntry extends Entry {
  type: "HealthCheck"
  healthCheckRating?: HealthCheckRating;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn?: string;
  gender: Gender;
  occupation: string;
  entries: Array<HospitalEntry | OccupationalHealthcareEntry | HealthCheckEntry>;
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;