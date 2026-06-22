import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate();

  useEffect(() => {

    // Remove login details
    localStorage.removeItem("role");
    localStorage.removeItem("currentUser");

    alert("✅ Logged out successfully");

    navigate("/");

  }, [navigate]);

  return (
    <div className="container mt-5 text-center">
      <h3>Logging out...</h3>
    </div>
  );
}

export default Logout;