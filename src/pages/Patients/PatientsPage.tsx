import { usePatients } from "../../features/patients/hooks/usePatients";

function PatientsPage() {
  const { patients, loading, error } = usePatients();

  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="breadcrumb">ICU / Patients</div>

          <h1>Patients</h1>

          <p>
            View and monitor admitted ICU patients.
          </p>
        </div>
      </div>

      {/* Patients Card */}
      <div className="card">
        <div className="card-header">
          <div>
            <h2>All Patients</h2>

            <p>
              {loading
                ? "Loading..."
                : `${patients.length} patient${
                    patients.length === 1 ? "" : "s"
                  }`}
            </p>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="state-container">
            <div className="state-icon">↻</div>

            <h3>Loading patients...</h3>

            <p>
              Fetching patient records from Directus.
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="state-container">
            <div className="state-icon error">!</div>

            <h3>Unable to load patients</h3>

            <p>{error}</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && patients.length === 0 && (
          <div className="state-container">
            <div className="state-icon">+</div>

            <h3>No patients found</h3>

            <p>
              There are currently no patient records in
              Directus.
            </p>
          </div>
        )}

        {/* Table */}
        {!loading && !error && patients.length > 0 && (
          <div className="table-wrapper">
            <table className="data-table">
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
                {patients.map((patient) => {
                  const initials =
                    `${patient.first_name?.charAt(0) ?? ""}${patient.last_name?.charAt(0) ?? ""}`;

                  return (
                    <tr key={patient.id}>
                      <td>
                        <div className="patient-cell">
                          <div className="patient-avatar">
                            {initials}
                          </div>

                          <div>
                            <div className="patient-name">
                              {patient.first_name}{" "}
                              {patient.last_name}
                            </div>

                            <div className="patient-code">
                              {patient.patient_code}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>{patient.age}</td>

                      <td className="capitalize">
                        {patient.gender}
                      </td>

                      <td>{patient.room_number}</td>

                      <td>
                        <span className="status-badge">
                          {patient.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientsPage;