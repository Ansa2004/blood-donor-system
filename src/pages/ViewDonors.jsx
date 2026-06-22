import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function ViewDonors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    loadDonors();
  }, []);

  const loadDonors = () => {
    const storedDonors =
      JSON.parse(localStorage.getItem("donors")) || [];

    setDonors(storedDonors);
  };

  const deleteDonor = (id) => {
    if (!window.confirm("Delete this donor?")) return;

    const updatedDonors = donors.filter(
      (donor) => donor.id !== id
    );

    localStorage.setItem(
      "donors",
      JSON.stringify(updatedDonors)
    );

    setDonors(updatedDonors);
  };

  return (
    <MainLayout>
      <div className="card shadow">
        <div className="card-header">
          <h3>All Donors</h3>
        </div>

        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Blood Group</th>
                <th>Phone</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {donors.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No Donors Found
                  </td>
                </tr>
              ) : (
                donors.map((donor) => (
                  <tr key={donor.id}>
                    <td>{donor.name}</td>
                    <td>{donor.age}</td>
                    <td>{donor.blood_group}</td>
                    <td>{donor.phone}</td>
                    <td>{donor.city}</td>

                    <td>
                      <Link
                        to={`/edit-donor/${donor.id}`}
                        className="btn btn-primary btn-sm me-2"
                      >
                        Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          deleteDonor(donor.id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>
    </MainLayout>
  );
}

export default ViewDonors;