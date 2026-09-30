import { Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import PatientsPage from "./features/patients/pages/PatientsPage";
import PatientDetailPage from "./features/patients/pages/PatientDetailPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route
          path="/patients/:patientId"
          element={<PatientDetailPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;