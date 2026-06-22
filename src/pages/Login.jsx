import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

 
  
 const handleLogin = (e) => {
  e.preventDefault();

  const admin =
    JSON.parse(localStorage.getItem("adminProfile")) || {
      email: "admin@gmail.com",
      password: "admin123",
    };

  if (
  email === admin.email &&
  password === admin.password
) {

  localStorage.setItem("role", "admin");

  navigate("/dashboard");

} else {
    alert("Invalid Credentials");
  }
};

  return (
    <div className="container">

      <div
       className="card p-4 shadow mx-auto mt-5"
       style={{maxWidth:"400px"}}
      >

        <h2 className="text-center text-danger">
          Blood Donor System
        </h2>

        <form onSubmit={handleLogin}>

          <input
           type="email"
           placeholder="Email"
           className="form-control mb-3"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
          />

          <input
           type="password"
           placeholder="Password"
           className="form-control mb-3"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
          />

          <button
  className="btn btn-danger w-100"
>
  Login
</button>

<p className="text-center mt-3">
  Don't have an account?{" "}

  <span
    style={{
      color: "red",
      cursor: "pointer",
      fontWeight: "bold",
    }}
    onClick={() => navigate("/register")}
  >
    Register
  </span>

</p>

        </form>

      </div>
    </div>
  );
}

export default Login;