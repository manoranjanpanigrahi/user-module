import React from "react";
import "./Dashboard.css";
import data from "./MOCK_DATA.json";

function Dashboard() {
  return (
    <div className="dashboard pb-5 pt-2">
      <h1 className="heading my-4">User Data</h1>
      <div className="user-table">
        <table className="table table-hover">
          <thead className="table-head">
            <tr>
              <th>Sr. No</th>
              <th>Avatar</th>
              <th>User Name</th>
              <th>User ID</th>
              <th>Email ID</th>
              <th>User Role</th>
              <th>Shift</th>
            </tr>
          </thead>
          <tbody>
            {/* maping over the data of all users and displaying it */}
            {data.map((dat) => (
              <tr>
                <td>{dat["Sr No"]}</td>
                <td>
                  <img src={dat.Avatar} alt="img" />
                </td>
                <td>{dat["User Name"]}</td>
                <td>{dat["User ID"]}</td>
                <td>{dat["Email ID"]}</td>
                <td>{dat["User Role"]}</td>
                <td>{dat.Shift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
