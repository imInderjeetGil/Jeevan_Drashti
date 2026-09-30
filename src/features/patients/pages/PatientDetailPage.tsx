import { useParams } from "react-router-dom";

export default function PatientDetailPage() {
  const { patientId } = useParams();

  return (
    <div style={{ padding: "32px" }}>
      <h1>Patient Detail</h1>

      <p>Patient ID:</p>

      <strong>{patientId}</strong>
    </div>
  );
}