import React from "react";

import { HealthCheckEntry, HospitalEntry, OccupationalHealthcareEntry } from "../../types";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealingIcon from "@mui/icons-material/Healing";
import HeartIcon from "@mui/icons-material/FavoriteRounded";
import HeartBrokenIcon from "@mui/icons-material/HeartBrokenRounded";
import { Tooltip, Typography } from "@mui/material";

const HealthCheckIcon: React.FC<{ level: number }> = ({ level }) => {
  switch (level) {
    case 0:
      return (
        <Tooltip title="Health Check Rating" placement="bottom-end">
          <HeartIcon style={{ color: "#44BB44" }} />
        </Tooltip>
      );
    case 1:
      return (
        <Tooltip title="Health Check Rating" placement="bottom-end">
          <HeartIcon style={{ color: "#bbff00" }} />
        </Tooltip>
      );
    case 2:
      return (
        <Tooltip title="Health Check Rating" placement="bottom-end">
          <HeartIcon style={{ color: "#dddd00" }} />
        </Tooltip>
      );
    case 3:
      return (
        <Tooltip title="Health Check Rating" placement="bottom-end">
          <HeartBrokenIcon style={{ color: "#918710" }} />
        </Tooltip>
      );
  }
};

export const HealthCheckDetails: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  entry.healthCheckRating = Number(entry.healthCheckRating);
  return (
    <div style={{ marginTop: "12px", flexDirection: "row" }}>
      <Tooltip title="Health Check" placement="bottom-end">
        <AssignmentTurnedInIcon color="primary" />
      </Tooltip>
      {Number.isInteger(entry.healthCheckRating) && (
        <HealthCheckIcon level={entry.healthCheckRating} />
      )}
    </div>
  );
};

export const OccupationalHealthcareDetails: React.FC<{ entry: OccupationalHealthcareEntry }> = ({
  entry,
}) => {
  return (
    <div style={{ marginTop: "12px", flexDirection: "row" }}>
      <Tooltip title="Occupational Healthcare" placement="bottom-end">
        <MedicalServicesIcon color="primary"/>
      </Tooltip>
      <Typography display="inline" style={{ verticalAlign: "bottom", marginLeft: "6px"}}>
        {entry.employerName}
      </Typography>
    </div>
  );
};

export const HospitalDetails: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return (
    <div style={{ marginTop: "12px", flexDirection: "row" }}>
      <Tooltip title="Hospital visit" placement="bottom-end">
        <HealingIcon />
      </Tooltip>
    </div>
  );
};

// export default { HealthCheckDetails, HospitalDetails, OccupationalHealthcareDetails }
