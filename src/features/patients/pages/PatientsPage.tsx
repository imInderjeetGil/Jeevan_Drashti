import { usePatients } from "../hooks/usePatients";

export default function PatientsPage() {
  const { patients, loading, error } = usePatients();

  return (
    <div className="app-shell">
      <main className="main-content">
        <div className="topbar">
          <div>
            <div className="breadcrumb">ICU / Patients</div>

            <h1>Patients</h1>

            <p className="page-description">
              View and monitor admitted ICU patients.
            </p>
          </div>
        </div>

        {loading && (
          <div className="panel">
            <div className="empty-state">
              <h3>Loading patients...</h3>
            </div>
          </div>
        )}

        {error && (
          <div className="panel">
            <div className="empty-state">
              <h3>Unable to load patients</h3>
              <p>{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && patients.length > 0 && (
          <div className="panel">
            <div className="panel-header">
              <div>
                <h2>All Patients</h2>
                <p>{patients.length} patient(s)</p>
              </div>
            </div>

            <div className="patient-table-wrapper">
              <table className="patient-table">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Room</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {patients.map((patient) => (
                    <tr key={patient.id}>
                      <td>
                        <div className="patient-name">
                          <div className="patient-avatar">
                            {patient.first_name.charAt(0)}
                            {patient.last_name.charAt(0)}
                          </div>

                          <div>
                            <div className="patient-full-name">
                              {patient.first_name} {patient.last_name}
                            </div>

                            <div className="patient-code">
                              {patient.patient_code}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>{patient.age}</td>
                      <td>{patient.gender}</td>
                      <td>{patient.room_number}</td>

                      <td>
                        <span className="patient-status">
                          {patient.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}