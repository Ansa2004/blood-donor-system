import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function EditDonor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    blood_group: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    city: "",
  });

  useEffect(() => {
    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    const donor = donors.find((d) => d.id === Number(id));

    if (donor) {
      setFormData(donor);
    }
  }, [id]);

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
      !formData.age ||
      !formData.gender ||
      !formData.blood_group ||
      !formData.phone ||
      !formData.email ||
      !formData.state ||
      !formData.district ||
      !formData.city
    ) {
      alert("Please fill all fields");
      return;
    }

    // Age validation
    if (Number(formData.age) < 18) {
      alert("Only donors aged 18 years or above can donate blood");
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    const donors = JSON.parse(localStorage.getItem("donors")) || [];

    const updatedDonors = donors.map((donor) =>
      donor.id === Number(id)
        ? {
            ...formData,
            id: Number(id),
          }
        : donor,
    );

    localStorage.setItem("donors", JSON.stringify(updatedDonors));

    alert("✅ Donor Updated Successfully");

    navigate("/view-donors");
  };

  return (
    <MainLayout>
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header">
            <h3>Edit Donor</h3>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label>Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label>Age</label>

                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    min="18"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label>Gender</label>

                  <select
                    className="form-control"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>

                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label>Blood Group</label>

                  <select
                    className="form-control"
                    name="blood_group"
                    value={formData.blood_group}
                    onChange={handleChange}
                  >
                    <option>O+</option>
                    <option>O-</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label>Phone</label>

                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value;

                      // Allow only numbers and max 10 digits
                      if (/^\d{0,10}$/.test(value)) {
                        setFormData({
                          ...formData,
                          phone: value,
                        });
                      }
                    }}
                    placeholder="Enter 10-digit phone number"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label>State</label>

                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label>District</label>

                  <input
                    type="text"
                    className="form-control"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label>City</label>

                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-success">
                Update Donor
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default EditDonor;
