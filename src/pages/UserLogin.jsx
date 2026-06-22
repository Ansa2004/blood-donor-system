import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

  e.preventDefault();

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (user) {

    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    localStorage.setItem("role", "user");

    navigate("/profile");

  } else {

    alert("Invalid Credentials");

  }

};

  return (

    <div className="container">

      <div
        className="card shadow mx-auto mt-5 p-4"
        style={{ maxWidth: "400px" }}
      >

        <h2 className="text-center text-danger mb-4">
          User Login
        </h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="btn btn-danger w-100"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-3">

          Don't have an account?

          <span
            style={{
              color: "red",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() =>
              navigate("/user-register")
            }
          >
            {" "}Register
          </span>

        </p>

      </div>

    </div>

  );

}

export default UserLogin;