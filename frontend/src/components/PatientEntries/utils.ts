import { Entry } from "../../types";

export const parseHealthCheck = (type: string): string => {
  if (typeof type !== "string" || type !== "HealthCheck") {
    throw new Error("Wrong type");
  }
  return type;
};

export const parseOccupationalHealtchcare = (type: string): string => {
  if (typeof type !== "string" || type !== "OccupationalHealtchcare") {
    throw new Error("Wrong type in OccupationalHealthcare");
  }
  return type;
};

const isString = (type: unknown): type is string =>
  typeof type === "string" || type instanceof String;

const generalParse = (str: unknown): string => {
  if (!isString(str)) {
    throw new Error("Invalid type in id, specialist or description")
  }
  return str;
}

const parseDate = (str: unknown): string => {
  if (!isString(str)) {
    throw new Error("Date is not string")
  } else if (!Boolean(Date.parse(str))) {
    throw new Error("Invalid date")
  }
  return str
}

export const parseEntry = (entry: Entry): Entry => {
  if (
    "id" in entry &&
    "date" in entry &&
    "specialist" in entry &&
    "type" in entry &&
    "description" in entry
  ) {
    switch (entry.type) {
      case "HealthCheck":
        const newEntry1: Entry = {
          type: entry.type,
          id: generalParse(entry.id),
          date: parseDate(entry.date),
          specialist: generalParse(entry.specialist),
          description: generalParse(entry.description),
        };
        return {...entry, ...newEntry1};
      case "Hospital":
        const newEntry2: Entry = {
          type: entry.type,
          id: generalParse(entry.id),
          date: parseDate(entry.date),
          specialist: generalParse(entry.specialist),
          description: generalParse(entry.description),
        };
        return {...entry, ...newEntry2};
      case "OccupationalHealthcare":
        const newEntry3: Entry = {
          type: entry.type,
          id: generalParse(entry.id),
          date: parseDate(entry.date),
          specialist: generalParse(entry.specialist),
          description: generalParse(entry.description),
        };
        return {...entry, ...newEntry3};
      default:
        const exhaustiveCheck: never = entry;
        return exhaustiveCheck;
    }
  }
  throw new Error("Entry is missing properties")
};
