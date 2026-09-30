import { readItem, readItems } from "@directus/sdk";
import { directus } from "../../../lib/directus";
import type { Patient } from "../../../types/directus";

export async function getPatients(): Promise<Patient[]> {
  const patients = await directus.request(
    readItems("patients", {
      fields: [
        "id",
        "patient_code",
        "first_name",
        "last_name",
        "age",
        "gender",
        "room_number",
        "admission_time",
        "status",
      ],
    }),
  );

  return patients as unknown as Patient[];
}

export async function getPatientById(
  patientId: string,
): Promise<Patient> {
  const patient = await directus.request(
    readItem("patients", patientId, {
      fields: [
        "id",
        "patient_code",
        "first_name",
        "last_name",
        "age",
        "gender",
        "room_number",
        "admission_time",
        "status",
      ],
    }),
  );

  return patient;
}