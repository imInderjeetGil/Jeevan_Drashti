import { Routes, Route } from "react-router-dom";
import PatientsPage from "./features/patients/pages/PatientsPage";
import DashboardPage from "./pages/DashboardPage";
import PatientDetailPage from "./features/patients/pages/PatientDetailPage";

function App() {
  return (
    <Routes>
  <Route
    path="/"
    element={<DashboardPage />}
  />

  <Route
    path="/patients"
    element={<PatientsPage />}
  />

  <Route
    path="/patients/:patientId"
    element={<PatientDetailPage />}
  />
</Routes>
  );
}

export default App;