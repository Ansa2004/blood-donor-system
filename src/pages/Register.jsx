import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const {
      name,
      email,
      phone,
      password,
      confirmPassword,
    } = formData;

    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}

// Phone number validation
if (!/^\d{10}$/.test(phone)) {
  alert("Please enter a valid 10-digit phone number");
  return;
}

    const user = {
      name,
      email,
      phone,
      password,
    };

    localStorage.setItem(
      "adminProfile",
      JSON.stringify(user)
    );

    alert("✅ Registration Successful");

    navigate("/");

  };

  return (

    <div className="container-fluid">

      <div
        className="card shadow mx-auto mt-5 p-4"
        style={{ maxWidth: "500px" }}
      >

        <h2 className="text-center text-danger mb-4">
          Register
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label>Name</label>

            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <label>Email</label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <label>Phone Number</label>

            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <label>Password</label>

            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <label>Confirm Password</label>

            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

          </div>

          <button
            type="submit"
            className="btn btn-danger w-100"
          >
            Register
          </button>

        </form>

      </div>

    </div>

  );

}

export default Register;