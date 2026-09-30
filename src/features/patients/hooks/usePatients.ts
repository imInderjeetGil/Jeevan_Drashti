import { useEffect, useState } from "react";
import { getPatients } from "../services/patientService";
import type { Patient } from "../../../types/directus";

export function usePatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPatients() {
      try {
        setLoading(true);
        setError(null);

        const data = await getPatients();

        setPatients(data);
      } catch (err) {
        console.error("Failed to fetch patients:", err);

        setPatients([]);
        setError("Unable to load patients from Directus.");
      } finally {
        setLoading(false);
      }
    }

    loadPatients();
  }, []);

  return {
    patients,
    loading,
    error,
  };
}