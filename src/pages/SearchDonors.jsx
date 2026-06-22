import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

function SearchDonors() {

  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);

  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {

    const storedDonors =
      JSON.parse(localStorage.getItem("donors")) || [];

    setDonors(storedDonors);
    setFilteredDonors(storedDonors);

  }, []);

  const handleSearch = () => {

    const results = donors.filter((donor) => {

      return (

        (name === "" ||
          donor.name
            .toLowerCase()
            .includes(name.toLowerCase())) &&

        (bloodGroup === "" ||
          donor.blood_group === bloodGroup) &&

        (state === "" ||
          donor.state
            ?.toLowerCase()
            .includes(state.toLowerCase())) &&

        (district === "" ||
          donor.district
            ?.toLowerCase()
            .includes(district.toLowerCase())) &&

        (city === "" ||
          donor.city
            ?.toLowerCase()
            .includes(city.toLowerCase()))

      );

    });

    setFilteredDonors(results);
  };

  return (

    <MainLayout>

      <div className="card shadow">

        <div className="card-header">
          <h3>Search Donors</h3>
        </div>

        <div className="card-body">

          <div className="row mb-3">

            <div className="col-md-4 mb-3">

              <input
                type="text"
                className="form-control"
                placeholder="Search by Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>

            <div className="col-md-4 mb-3">

              <select
                className="form-control"
                value={bloodGroup}
                onChange={(e) =>
                  setBloodGroup(e.target.value)
                }
              >

                <option value="">
                  All Blood Groups
                </option>

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

              <input
                type="text"
                className="form-control"
                placeholder="State"
                value={state}
                onChange={(e) =>
                  setState(e.target.value)
                }
              />

            </div>

            <div className="col-md-4 mb-3">

              <input
                type="text"
                className="form-control"
                placeholder="District"
                value={district}
                onChange={(e) =>
                  setDistrict(e.target.value)
                }
              />

            </div>

            <div className="col-md-4 mb-3">

              <input
                type="text"
                className="form-control"
                placeholder="City"
                value={city}
                onChange={(e) =>
                  setCity(e.target.value)
                }
              />

            </div>

            <div className="col-md-4 mb-3">

              <button
                className="btn btn-danger w-100"
                onClick={handleSearch}
              >
                Search
              </button>

            </div>

          </div>

          <table className="table table-bordered">

            <thead>

              <tr>
                <th>Name</th>
                <th>Blood Group</th>
                <th>Phone</th>
                <th>State</th>
                <th>District</th>
                <th>City</th>
              </tr>

            </thead>

            <tbody>

              {filteredDonors.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center"
                  >
                    No Donors Found
                  </td>

                </tr>

              ) : (

                filteredDonors.map((donor) => (

                  <tr key={donor.id}>

                    <td>{donor.name}</td>
                    <td>{donor.blood_group}</td>
                    <td>{donor.phone}</td>
                    <td>{donor.state}</td>
                    <td>{donor.district}</td>
                    <td>{donor.city}</td>

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

export default SearchDonors;