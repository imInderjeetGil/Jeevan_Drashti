import {
  Activity,
  AlertTriangle,
  LayoutDashboard,
  MoreVertical,
  Plus,
  Users,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">
            <Plus size={24} strokeWidth={2.5} />
          </div>

          <div>
            <div className="brand-title">ICU Watch</div>
            <div className="brand-subtitle">
              Early Warning System
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? "active" : ""}`
            }
          >
            <LayoutDashboard size={17} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/patients"
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? "active" : ""}`
            }
          >
            <Users size={17} />
            <span>Patients</span>
          </NavLink>

          <button className="sidebar-nav-item" type="button">
            <Activity size={17} />
            <span>Clinical Data</span>
          </button>

          <button className="sidebar-nav-item" type="button">
            <AlertTriangle size={17} />
            <span>Risk Monitoring</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-system">
            <span className="sidebar-online-dot" />

            <div>
              <div className="sidebar-system-title">
                System Online
              </div>
              <div className="sidebar-system-subtitle">
                Directus backend
              </div>
            </div>
          </div>

          <div className="sidebar-user">
            <div className="sidebar-user-avatar">DR</div>

            <div className="sidebar-user-info">
              <div className="sidebar-user-name">
                Clinical User
              </div>
              <div className="sidebar-user-role">
                ICU Staff
              </div>
            </div>

            <MoreVertical size={16} />
          </div>
        </div>
      </aside>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;