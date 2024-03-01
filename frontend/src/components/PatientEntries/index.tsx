import React from "react";
import { Typography } from "@mui/material";
import { Patient, Diagnose } from "../../types";
import diagnoseService from "../../services/diagnoses";

interface PatientProps {
  patient: Patient;
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
      {patient.entries.map((entry) => (
        <div key={entry.id}>
          <Typography>
            <b>{new Date(entry.date).toLocaleDateString("fi-FI")}</b> {entry.description}
          </Typography>
          {entry.diagnosisCodes && <Typography style={{ marginTop: "6px" }}>Diagnoses</Typography>}
          {entry.diagnosisCodes &&
            entry.diagnosisCodes.map((code, index) => {
              const diagnose = diagnoses.find((d) => d.code === code)
              return <Typography key={index} style={{ marginLeft: "12px" }}>
                {code} {diagnose?.name}
              </Typography>;
            })}
        </div>
      ))}
    </div>
  );
};

export default PatientEntries;
