function Topbar() {

  const role = localStorage.getItem("role");

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const adminProfile = JSON.parse(
    localStorage.getItem("adminProfile")
  );

  const name =
    role === "admin"
      ? adminProfile?.name || "Admin"
      : currentUser?.name || "User";

  return (

    <div className="topbar">

      <input
        type="text"
        placeholder="Search..."
        className="form-control w-25"
      />

      <h6>{name}</h6>

    </div>

  );
}

export default Topbar;