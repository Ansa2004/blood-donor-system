import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserRegistration() {

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

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      alert("User already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("✅ Registration Successful");

    navigate("/user-login");

  };

  return (

    <div className="container">

      <div
        className="card shadow mx-auto mt-5 p-4"
        style={{ maxWidth: "500px" }}
      >

        <h2 className="text-center text-danger mb-4">
          User Registration
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-danger w-100"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-3">

          Already have an account?

          <span
            style={{
              color: "red",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() =>
              navigate("/user-login")
            }
          >
            {" "}Login
          </span>

        </p>

      </div>

    </div>

  );

}

export default UserRegistration;