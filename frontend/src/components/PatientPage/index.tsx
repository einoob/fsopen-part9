import React from "react";
import { Patient } from "../../types";
import { Paper, Typography } from "@mui/material";
import { Female, Male, Transgender } from "@mui/icons-material";
import PatientEntries  from '../PatientEntries'

import patientService from "../../services/patients";

import { useParams } from "react-router-dom";

interface PatientPageProps {
  id: string;
  setPatientId: Function;
}

interface GenderIconProps {
  gender: string;
  style: string;
}

const GenderIcon: React.FC<GenderIconProps> = ({ gender }) => {
  if (!gender) return null;
  if (gender === "female") return <Female color="secondary" style={{ margin: "0px 0px -4px 2px" }} />;
  else if (gender === "male")
    return <Male color="secondary" style={{ margin: "0px 0px -4px 2px" }} />;
  else if (gender === "other")
    return <Transgender color="secondary" style={{ margin: "0px 0px -4px 2px" }} />;
  return null;
};

const PatientPage: React.FC<PatientPageProps> = ({ setPatientId }) => {
  const [patient, setPatient] = React.useState<Patient>();

  const params = useParams();
  console.log(params, "params")

  React.useEffect(() => {
    const fetchPatient = async () => {
      if (params.id) {
        const fetchedPatient: Patient = await patientService.getPatient(params.id);
        setPatient(fetchedPatient);
        setPatientId(params.id);
      }
    };
    void fetchPatient();
  }, [params.id]);

  if (!patient) return <div style={{ marginTop: "12px" }}>No patient found</div>;
  return (
    <div>
      <Paper style={{ marginTop: "24px", width: "50%", padding: "12px" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          Patient
        </Typography>
        <Typography>
          Name: <b>{patient.name}</b>
          <GenderIcon gender={patient.gender} style="marginLeft: 36px;" />
          <br />
          Occupation: <b>{patient.occupation}</b>
          <br />
          Date of birth: <b>{new Date(String(patient.dateOfBirth)).toLocaleDateString("fi-FI")}</b>
        </Typography>
        <PatientEntries patient={patient}/>
      </Paper>
    </div>
  );
};

export default PatientPage;
