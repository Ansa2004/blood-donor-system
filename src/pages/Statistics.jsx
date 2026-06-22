import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

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

  const chartData = Object.entries(
    bloodGroupStats
  ).map(([group, count]) => ({
    bloodGroup: group,
    donors: count,
  }));

  return (

    <MainLayout>

      <div className="container mt-4">

        <div className="card shadow border-0">

          <div className="card-header bg-danger text-white">

            <h3 className="mb-0">
              Blood Group Statistics
            </h3>

          </div>

          <div className="card-body">

            {/* Chart */}

            {chartData.length > 0 ? (

              <ResponsiveContainer
                width="100%"
                height={350}
              >

                <BarChart data={chartData}>

                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="bloodGroup"
                  />

                  <YAxis
                    allowDecimals={false}
                  />

                  <Tooltip />

                  <Bar
                    dataKey="donors"
                    fill="#dc3545"
                    radius={[5, 5, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            ) : (

              <p className="text-center">
                No donors available
              </p>

            )}

            <hr className="my-4" />

            {/* Table */}

            <table className="table table-bordered table-hover">

              <thead className="table-danger">

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

                  Object.entries(
                    bloodGroupStats
                  ).map(([group, count]) => (

                    <tr key={group}>

                      <td>{group}</td>

                      <td>{count}</td>

                    </tr>

                  ))

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