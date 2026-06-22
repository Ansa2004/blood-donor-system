import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Reports() {
  const [report, setReport] = useState({
    totalDonors: 0,
    availableDonors: 0,
    bloodGroups: 0,
    cities: 0,
  });

  useEffect(() => {
    const donors =
      JSON.parse(localStorage.getItem("donors")) || [];

    const bloodGroups = new Set(
      donors.map((d) => d.blood_group)
    );

    const cities = new Set(
      donors.map((d) => d.city)
    );

    setReport({
      totalDonors: donors.length,
      availableDonors: donors.length,
      bloodGroups: bloodGroups.size,
      cities: cities.size,
    });
  }, []);

  return (
    <MainLayout>
      <div className="card shadow-sm">

        <div className="card-header">
          <h3>Reports</h3>
        </div>

        <div className="card-body">

          <table className="table table-bordered">

            <thead>
              <tr>
                <th>Report</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Total Donors</td>
                <td>{report.totalDonors}</td>
              </tr>

              <tr>
                <td>Available Donors</td>
                <td>{report.availableDonors}</td>
              </tr>

              <tr>
                <td>Blood Groups Available</td>
                <td>{report.bloodGroups}</td>
              </tr>

              <tr>
                <td>Cities Covered</td>
                <td>{report.cities}</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </MainLayout>
  );
}

export default Reports;