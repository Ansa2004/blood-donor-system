import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import hero from "../assets/herobanner.jpeg";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

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

  const chartData = Object.entries(
    bloodGroupStats
  ).map(([group, count]) => ({
    bloodGroup: group,
    donors: count,
  }));

  return (

    <MainLayout>

      <div className="container-fluid px-4 py-3">

        {/* Hero Banner */}

        <div className="hero-banner mb-4">

          <img
            src={hero}
            alt="BDMS Banner"
            className="hero-img"
          />

        </div>

        {/* Statistics Cards */}

        <div className="row g-4 mb-4">

          <div className="col-md-3">

            <div className="stat-card stat-red">

              <h1>{totalDonors}</h1>

              <p>Total Donors</p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="stat-card stat-blue">

              <h1>
                {
                  Object.keys(
                    bloodGroupStats
                  ).length
                }
              </h1>

              <p>Blood Groups</p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="stat-card stat-green">

              <h1>{donors.length}</h1>

              <p>Total Donations</p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="stat-card stat-yellow">

              <h1>{totalDonors}</h1>

              <p>Available Units</p>

            </div>

          </div>

        </div>

        {/* Chart + Recent Donors */}

        <div className="row">

          {/* Chart */}

          <div className="col-lg-8">

            <div className="card shadow border-0 h-100">

              <div className="card-header bg-white">

                <h4>
                  Donations by Blood Group
                </h4>

              </div>

              <div className="card-body">

                <ResponsiveContainer
                  width="100%"
                  height={400}
                >

                  <BarChart data={chartData}>

                    <CartesianGrid
                      strokeDasharray="3 3"
                    />

                    <XAxis
                      dataKey="bloodGroup"
                    />

                    <YAxis allowDecimals={false} />

                    <Tooltip />

                    <Bar
                      dataKey="donors"
                      fill="#dc3545"
                      radius={[5, 5, 0, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </div>

          </div>

          {/* Recent Donors */}

          <div className="col-lg-4">

            <div className="card shadow border-0">

              <div className="card-header bg-white">

                <h4>
                  Recent Donors
                </h4>

              </div>

              <div className="card-body">

                <table className="table">

                  <thead>

                    <tr>

                      <th>Name</th>

                      <th>Blood Group</th>

                    </tr>

                  </thead>

                  <tbody>

                    {

                      donors.length === 0 ?

                      (

                        <tr>

                          <td
                            colSpan="2"
                            className="text-center"
                          >

                            No Donors Found

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