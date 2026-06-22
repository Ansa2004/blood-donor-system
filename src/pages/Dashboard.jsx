import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Dashboard() {

  const [donors, setDonors] = useState([]);

  useEffect(() => {

    const storedDonors =
      JSON.parse(localStorage.getItem("donors")) || [];

    setDonors(storedDonors);

  }, []);

  const totalDonors = donors.length;

  const bloodGroupStats = {};

  donors.forEach((donor) => {

    bloodGroupStats[donor.blood_group] =
      (bloodGroupStats[donor.blood_group] || 0) + 1;

  });

  return (

    <MainLayout>

      <div className="container-fluid">

        <h2 className="mb-4">
          Dashboard
        </h2>

        {/* Dashboard Cards */}

        <div className="row g-4 mb-4">

          <div className="col-md-3">

            <div
              className="card shadow border-0 text-center p-3"
              style={{
                background: "#ffeaea"
              }}
            >

              <h1 className="text-danger">
                {totalDonors}
              </h1>

              <h5>Total Donors</h5>

            </div>

          </div>

          <div className="col-md-3">

            <div
              className="card shadow border-0 text-center p-3"
              style={{
                background: "#eaf2ff"
              }}
            >

              <h1 className="text-primary">

                {
                  Object.keys(
                    bloodGroupStats
                  ).length
                }

              </h1>

              <h5>Blood Groups</h5>

            </div>

          </div>

          <div className="col-md-3">

            <div
              className="card shadow border-0 text-center p-3"
              style={{
                background: "#eaf9ef"
              }}
            >

              <h1 className="text-success">

                {donors.length}

              </h1>

              <h5>Total Donations</h5>

            </div>

          </div>

          <div className="col-md-3">

            <div
              className="card shadow border-0 text-center p-3"
              style={{
                background: "#fff7e6"
              }}
            >

              <h1 className="text-warning">

                {totalDonors}

              </h1>

              <h5>Available</h5>

            </div>

          </div>

        </div>


        {/* Statistics + Recent Donors */}

        <div className="row">

          {/* Blood Group Statistics */}

          <div className="col-md-6">

            <div className="card shadow">

              <div className="card-header">

                <h4>

                  Blood Group Statistics

                </h4>

              </div>

              <div className="card-body">

                <table className="table table-bordered">

                  <thead>

                    <tr>

                      <th>Blood Group</th>

                      <th>Donors</th>

                    </tr>

                  </thead>

                  <tbody>

                    {

                      Object.keys(
                        bloodGroupStats
                      ).length === 0 ?

                      (

                        <tr>

                          <td
                            colSpan="2"
                            className="text-center"
                          >

                            No donors added yet

                          </td>

                        </tr>

                      )

                      :

                      Object.entries(
                        bloodGroupStats
                      ).map(

                        ([group, count]) => (

                          <tr key={group}>

                            <td>

                              {group}

                            </td>

                            <td>

                              {count}

                            </td>

                          </tr>

                        )

                      )

                    }

                  </tbody>

                </table>

              </div>

            </div>

          </div>


          {/* Recent Donors */}

          <div className="col-md-6">

            <div className="card shadow">

              <div className="card-header">

                <h4>

                  Recent Donors

                </h4>

              </div>

              <div className="card-body">

                <table className="table table-bordered">

                  <thead>

                    <tr>

                      <th>Name</th>

                      <th>Blood Group</th>

                      <th>City</th>

                    </tr>

                  </thead>

                  <tbody>

                    {

                      donors.length === 0 ?

                      (

                        <tr>

                          <td
                            colSpan="3"
                            className="text-center"
                          >

                            No donors found

                          </td>

                        </tr>

                      )

                      :

                      donors

                        .slice()

                        .reverse()

                        .slice(0, 5)

                        .map((donor) => (

                          <tr key={donor.id}>

                            <td>

                              {donor.name}

                            </td>

                            <td>

                              {donor.blood_group}

                            </td>

                            <td>

                              {donor.city}

                            </td>

                          </tr>

                        ))

                    }

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Dashboard;