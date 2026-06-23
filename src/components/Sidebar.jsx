import {
  FaTachometerAlt,
  FaUserPlus,
  FaUsers,
  FaSearch,
  FaChartPie,
  FaFileAlt,
  FaUserCircle
} from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {

  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">

      <h3 className="logo">
        🩸 BDMS
      </h3>

      
        <Link to="/dashboard">
          <FaTachometerAlt /> Dashboard
        </Link>
      

      
      <Link to="/add-donor">
        <FaUserPlus /> Add Donor
      </Link>

      <Link to="/view-donors">
        <FaUsers /> View Donors
      </Link>

     
        <Link to="/search-donors">
          <FaSearch /> Search
        </Link>
      

      
        <Link to="/statistics">
          <FaChartBar /> Statistics
        </Link>
      

      
        <Link to="/reports">
          <FaFileAlt /> Reports
        </Link>
      

      
        <Link to="/profile">
          <FaUserCircle /> Profile
        </Link>
      

      <Link to="/logout">
  <FaSignOutAlt /> Logout
</Link>

    </div>
  );
}

export default Sidebar;