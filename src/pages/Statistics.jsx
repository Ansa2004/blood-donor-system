import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Statistics() {

  const [donors, setDonors] = useState([]);

  useEffect(() => {

    const storedDonors =
      JSON.parse(localStorage.getItem("donors")) || [];

    setDonors(storedDonors);

  }, []);

  const bloodGroupStats = {};

  donors.forEach((donor) => {

    bloodGroupStats[donor.blood_group] =
      (bloodGroupStats[donor.blood_group] || 0) + 1;

  });

  return (

    <MainLayout>

      <div className="container mt-4">

        <div className="card shadow">

          <div className="card-header">

            <h3>Blood Group Statistics</h3>

          </div>

          <div className="card-body">

            <table className="table table-bordered">

              <thead>

                <tr>
                  <th>Blood Group</th>
                  <th>Number of Donors</th>
                </tr>

              </thead>

              <tbody>

                {Object.keys(bloodGroupStats).length === 0 ? (

                  <tr>

                    <td
                      colSpan="2"
                      className="text-center"
                    >
                      No donors available
                    </td>

                  </tr>

                ) : (

                  Object.entries(bloodGroupStats).map(
                    ([group, count]) => (

                      <tr key={group}>

                        <td>{group}</td>
                        <td>{count}</td>

                      </tr>

                    )
                  )

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default Statistics;