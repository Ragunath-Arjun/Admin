import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getusers();
  }, []);

  let getusers = async () => {
    try {
      const users = await axios.get(
        "https://5cdd0a92b22718001417c19d.mockapi.io/api/users"
      );
      setUserList(users.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User List</h1>
        <Link
          to="/portal/user-create"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fa-solid fa-user"></i> Create User
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/swhRkVYLJDrCE/giphy.gif" />
          ) : (
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {userList.map((user) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.city}</td>
                        <td>
                          <Link
                            to={`/portal/user-view/${user.id}`}
                            className="btn btn-info btn-sm mr-2"
                          >
                            View
                          </Link>
                          <button className="btn btn-primary btn-sm mr-2">
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm mr-2">
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserList;
