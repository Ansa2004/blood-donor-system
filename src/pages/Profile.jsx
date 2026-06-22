import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

function Profile() {
  const role = localStorage.getItem("role");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    let savedProfile;

    if (role === "admin") {
      savedProfile = JSON.parse(localStorage.getItem("adminProfile")) || {
        name: "Administrator",
        email: "admin@gmail.com",
        phone: "",
        password: "admin123",
      };
    } else {
      savedProfile = JSON.parse(localStorage.getItem("currentUser")) || {
        name: "",
        email: "",
        phone: "",
        password: "",
      };
    }

    setProfile(savedProfile);
  }, [role]);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Phone number validation
    if (!/^\d{10}$/.test(profile.phone)) {
      alert("Please enter a valid 10-digit phone number");

      return;
    }

    localStorage.setItem("adminProfile", JSON.stringify(profile));

    alert("✅ Profile Updated Successfully");
  };
  return (
    <MainLayout>
      <div className="container mt-3" style={{ maxWidth: "700px" }}>
        <div className="card shadow">
          <div className="card-header bg-danger text-white">
            <h3 className="mb-0">Profile</h3>
          </div>

          <div className="card-body">
            <div className="text-center mb-4">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.KiZvKQuVesqkjMPOUcFFnQHaHa?pid=Api"
                alt="Profile"
                width="100"
              />

              <h4 className="mt-3">{profile.name}</h4>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>

                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={profile.phone}
                  maxLength="10"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={profile.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-danger">
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;
