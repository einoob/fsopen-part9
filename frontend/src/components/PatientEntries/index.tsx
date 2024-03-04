import React from "react";
import { Paper, Typography } from "@mui/material";
import { Patient, Diagnose, Entry } from "../../types";
import { parseEntry } from "./utils";
import {HealthCheckDetails, OccupationalHealthcareDetails, HospitalDetails} from "../EntryDetails"
import diagnoseService from "../../services/diagnoses";

interface PatientProps {
  patient: Patient;
}

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case "HealthCheck":
      return <HealthCheckDetails entry={entry}/>;
    case "Hospital": 
      return <HospitalDetails entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcareDetails entry={entry} />;
  }
}

const PatientEntries: React.FC<PatientProps> = ({ patient }) => {
  const [diagnoses, setDiagnoses] = React.useState<Diagnose[]>([]);

  React.useEffect(() => {
    const fetchDiagnoses = async () => {
      const { data } = await diagnoseService.getAll();
      setDiagnoses(data);
    };
    void fetchDiagnoses();
  }, []);

  return (
    <div>
      <Typography variant="h6" style={{ marginTop: "24px" }}>
        Entries
      </Typography>
      {patient.entries.map((entry) => {
        const newEntry = parseEntry(entry)
        console.log(newEntry)
         return <Paper key={newEntry.id} style={{ marginBottom: "12px", padding: "6px" }}>
          <Typography>
            <b>{new Date(newEntry.date).toLocaleDateString("fi-FI")}</b> {newEntry.description}
          </Typography>
          <Typography fontSize={12}>Specialist: {newEntry.specialist}</Typography>
          <EntryDetails entry={newEntry} />
          {newEntry.diagnosisCodes && <Typography style={{ marginTop: "6px" }}>Diagnoses</Typography>}
          {newEntry.diagnosisCodes &&
            newEntry.diagnosisCodes.map((code, index) => {
              const diagnose = diagnoses.find((d) => d.code === code);
              return (
                <Typography key={index} style={{ marginLeft: "12px" }}>
                  {code} {diagnose?.name}
                </Typography>
              );
            })}
        </Paper>;
      })}
    </div>
  );
};

export default PatientEntries;
