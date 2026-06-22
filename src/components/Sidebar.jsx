import {
  FaTachometerAlt,
  FaUserPlus,
  FaUsers,
  FaSearch,
  FaChartPie,
  FaFileAlt,
  FaUserCircle
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {

  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">

      <h3 className="logo">
        🩸 BDMS
      </h3>

      {/* Admin Only */}
      {role === "admin" && (
        <Link to="/dashboard">
          <FaTachometerAlt /> Dashboard
        </Link>
      )}

      {/* Admin + User */}
      <Link to="/add-donor">
        <FaUserPlus /> Add Donor
      </Link>

      <Link to="/view-donors">
        <FaUsers /> View Donors
      </Link>

      {/* Admin Only */}
      {role === "admin" && (
        <Link to="/search-donors">
          <FaSearch /> Search
        </Link>
      )}

      {role === "admin" && (
        <Link to="/statistics">
          <FaChartPie /> Statistics
        </Link>
      )}

      {role === "admin" && (
        <Link to="/reports">
          <FaFileAlt /> Reports
        </Link>
      )}

      {role === "admin" && (
        <Link to="/profile">
          <FaUserCircle /> Profile
        </Link>
      )}

    </div>
  );
}

export default Sidebar;