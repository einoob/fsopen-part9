import diagnoseData from "../db/diagnoses";

import { Diagnose } from "../types";

const diagnoses: Array<Diagnose> = diagnoseData;

const getEntries = (): Diagnose[] => diagnoses;

const addDiagnose = () => null;

export default {
  getEntries,
  addDiagnose,
};
