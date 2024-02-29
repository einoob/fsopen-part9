import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Divider, Container, Typography } from "@mui/material";

import { apiBaseUrl } from "./constants";
import { Patient } from "./types";

import patientService from "./services/patients";
import PatientListPage from "./components/PatientListPage";
import PatientPage from "./components/PatientPage";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [id, setPatientId] = useState("");

  useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      const patients = await patientService.getAll();
      setPatients(patients);
    };
    void fetchPatientList();
  }, []);

  const handleSetPatientId = (id: string) => {
    setPatientId(id);
  };

  console.log(id);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Container>
          <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
            Patientor
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>
          <Divider hidden />
          <Routes>
            <Route
              path="/"
              element={
                <PatientListPage
                  patients={patients}
                  setPatients={setPatients}
                  setPatientId={setPatientId}
                />
              }
            />
            <Route
              path="/patients/:id"
              element={<PatientPage id={id} setPatientId={handleSetPatientId} />}
            />
          </Routes>
        </Container>
      </Router>
    </div>
    </ThemeProvider>
  );
};

export default App;
