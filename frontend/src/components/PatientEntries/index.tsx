import { Typography } from "@mui/material";
import { Patient } from "../../types";

interface PatientProps {
  patient: Patient;
}

const PatientEntries: React.FC<PatientProps> = ({ patient }) => {
  return (
    <div>
      <Typography variant="h6" style={{ marginTop: "24px" }}>
        Entries
      </Typography>
      {patient.entries.map((entry) => (
        <div key={entry.id}>
          <Typography><b>{new Date(entry.date).toLocaleDateString("fi-FI")}</b> {entry.description}</Typography>
          {entry.diagnosisCodes && <Typography style={{ marginTop: "6px"}}>Diagnoses</Typography>}
          {entry.diagnosisCodes && entry.diagnosisCodes.map((code, index) => (
            <Typography key={index} style={{ marginLeft: "12px"}}>{code}</Typography>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PatientEntries;
