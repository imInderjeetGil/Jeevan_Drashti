import { usePatients } from "../features/patients/hooks/usePatients";
import {
  Users,
  AlertTriangle,
  Activity,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Database,
} from "lucide-react";

function DashboardPage() {
  const { patients, loading, error } = usePatients();

  const activePatients = patients.filter(
    (patient) => patient.status?.toLowerCase() === "admitted",
  );

  return (
    <div className="icu-dashboard">
      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <div className="dashboard-header">
        <div>
          <div className="dashboard-breadcrumb">
            ICU / Overview
          </div>

          <h1>ICU Dashboard</h1>

          <p>
            Monitor patients and identify early signs of
            clinical deterioration.
          </p>
        </div>

        <div className="dashboard-header-actions">
          <div className="backend-status">
            <span className="online-dot"></span>
            Backend connected
          </div>

          <button className="header-icon-button">
            ◇
          </button>

          <div className="user-avatar">
            DR
          </div>
        </div>
      </div>

      {/* =========================================
          STAT CARDS
      ========================================= */}

      <div className="dashboard-stats">
        {/* Active Patients */}
        <div className="dashboard-stat-card">
          <div className="stat-top">
            <span className="stat-title">
              Active Patients
            </span>

            <div className="stat-icon blue">
              <Users size={17} />
            </div>
          </div>

          <div className="stat-value">
            {loading ? "—" : activePatients.length}
          </div>

          <div className="stat-subtitle">
            {error
              ? "Unable to fetch patient data"
              : "Currently admitted"}
          </div>
        </div>

        {/* High Risk */}
        <div className="dashboard-stat-card">
          <div className="stat-top">
            <span className="stat-title">
              High Risk
            </span>

            <div className="stat-icon red">
              <AlertTriangle size={17} />
            </div>
          </div>

          <div className="stat-value">
            —
          </div>

          <div className="stat-subtitle">
            Risk predictions unavailable
          </div>
        </div>

        {/* Medium Risk */}
        <div className="dashboard-stat-card">
          <div className="stat-top">
            <span className="stat-title">
              Medium Risk
            </span>

            <div className="stat-icon yellow">
              <AlertTriangle size={17} />
            </div>
          </div>

          <div className="stat-value">
            —
          </div>

          <div className="stat-subtitle">
            Risk predictions unavailable
          </div>
        </div>

        {/* Model Status */}
        <div className="dashboard-stat-card">
          <div className="stat-top">
            <span className="stat-title">
              Model Status
            </span>

            <div className="stat-icon green">
              <CheckCircle2 size={17} />
            </div>
          </div>

          <div className="stat-value model-status">
            Pending
          </div>

          <div className="stat-subtitle">
            Waiting for prediction engine
          </div>
        </div>
      </div>

      {/* =========================================
          MAIN GRID
      ========================================= */}

      <div className="dashboard-main-grid">
        {/* PATIENTS */}
        <div className="dashboard-panel patients-panel">
          <div className="panel-header">
            <div>
              <h2>Patients</h2>

              <p>
                Current ICU patient overview
              </p>
            </div>

            <button className="panel-action">
              View all
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Loading */}
          {loading && (
            <div className="dashboard-empty">
              <Activity size={28} />

              <h3>Loading patients...</h3>

              <p>
                Fetching patient records from Directus.
              </p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="dashboard-empty error-state">
              <AlertTriangle size={28} />

              <h3>Unable to load patients</h3>

              <p>{error}</p>
            </div>
          )}

          {/* No patients */}
          {!loading &&
            !error &&
            patients.length === 0 && (
              <div className="dashboard-empty">
                <Users size={28} />

                <h3>No patients found</h3>

                <p>
                  No patient records are currently available.
                </p>
              </div>
            )}

          {/* Patient list */}
          {!loading &&
            !error &&
            patients.length > 0 && (
              <div className="dashboard-patient-list">
                {patients.slice(0, 5).map((patient) => {
                  const initials =
                    `${patient.first_name?.charAt(0) ?? ""}${patient.last_name?.charAt(0) ?? ""}`;

                  return (
                    <div
                      className="dashboard-patient-row"
                      key={patient.id}
                    >
                      <div className="patient-info">
                        <div className="patient-avatar">
                          {initials}
                        </div>

                        <div>
                          <div className="patient-name">
                            {patient.first_name}{" "}
                            {patient.last_name}
                          </div>

                          <div className="patient-meta">
                            {patient.patient_code}
                            {" · "}
                            {patient.age} yrs
                            {" · "}
                            <span className="capitalize">
                              {patient.gender}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="patient-room">
                        <span>Room</span>
                        <strong>
                          {patient.room_number}
                        </strong>
                      </div>

                      <div>
                        <span className="admitted-badge">
                          <span></span>
                          {patient.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
        </div>

        {/* RISK MONITORING */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Risk Monitoring</h2>

              <p>
                Latest early-warning predictions
              </p>
            </div>

            <button className="panel-action">
              View details
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="dashboard-empty risk-empty">
            <div className="risk-empty-icon">
              <AlertTriangle size={25} />
            </div>

            <h3>No predictions yet</h3>

            <p>
              Risk scores will appear here when the ML
              prediction engine starts generating results.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM GRID
      ========================================= */}

      <div className="dashboard-bottom-grid">
        {/* RECENT ALERTS */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Recent Alerts</h2>

              <p>
                Clinical deterioration alerts
              </p>
            </div>
          </div>

          <div className="dashboard-empty small">
            <div className="success-empty-icon">
              <CheckCircle2 size={23} />
            </div>

            <h3>No active alerts</h3>

            <p>
              No clinical risk alerts have been generated.
            </p>
          </div>
        </div>

        {/* SYSTEM STATUS */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>System Status</h2>

              <p>
                Backend and prediction services
              </p>
            </div>
          </div>

          <div className="system-status-list">
            <div className="system-status-row">
              <div className="system-status-name">
                <span className="system-dot green-dot"></span>
                <Database size={15} />
                Directus API
              </div>

              <span className="system-badge connected">
                Connected
              </span>
            </div>

            <div className="system-status-row">
              <div className="system-status-name">
                <span className="system-dot yellow-dot"></span>
                <Activity size={15} />
                Prediction Engine
              </div>

              <span className="system-badge pending">
                Pending
              </span>
            </div>

            <div className="system-status-row">
              <div className="system-status-name">
                <span className="system-dot yellow-dot"></span>
                <ShieldCheck size={15} />
                Risk Monitoring
              </div>

              <span className="system-badge pending">
                Awaiting ML
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;