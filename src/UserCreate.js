import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function UserCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      state: "",
      city: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Please enter the Username";
      } else if (values.username.length < 3) {
        errors.username = "Length should be greater than 3";
      } else if (values.username.length > 15) {
        errors.username = "Length should be less than 15";
      }
      if (!values.email) {
        errors.email = "Please enter your Email";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.country) {
        errors.country = "Please enter the Country";
      }
      if (!values.state) {
        errors.state = "Please enter the Username";
      }
      if (!values.city) {
        errors.city = "Please enter your city";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post(
          "https://5cdd0a92b22718001417c19d.mockapi.io/api/users",
          values
        );
        navigate("/portal/user-list");
      } catch (error) {
        console.log(error);
        alert("Try again later");
        setLoading(false);
      }
    },
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div class="col-lg-6">
            <h3>Create User</h3>
            <form onSubmit={myFormik.handleSubmit}>
              <label className="form-label">Name:</label>
              <br />
              <input
                name="username"
                type={"text"}
                onChange={myFormik.handleChange}
                className={`form-control ${
                  myFormik.errors.username ? `is-invalid` : `is-valid`
                }`}
                value={myFormik.values.username}
              ></input>
              <span style={{ color: "red" }}>{myFormik.errors.username}</span>
              <br />
              <label>E-Mail:</label>
              <br />
              <input
                name="email"
                type="text"
                onChange={myFormik.handleChange}
                className={`form-control ${
                  myFormik.errors.email ? `is-invalid` : `is-valid`
                }`}
                value={myFormik.values.email}
              ></input>
              <span style={{ color: "red" }}>{myFormik.errors.email}</span>

              <br />

              <label className="form-label">Country:</label>
              <br />
              <select
                name="country"
                className={`form-control ${
                  myFormik.errors.country ? `is-invalid` : `is-valid`
                }`}
                onChange={myFormik.handleChange}
              >
                <option required value={""}>
                  ---Select---
                </option>
                <option value={"IND"}>India</option>
                <option value={"USA"}>America</option>
                <option value={"AUS"}>Australia</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.country}</span>
              <br />

              <label className="form-label">State:</label>
              <br />
              <select
                name="state"
                className={`form-control ${
                  myFormik.errors.state ? `is-invalid` : `is-valid`
                }`}
                onChange={myFormik.handleChange}
              >
                <option value={""}>---Select---</option>
                <option value={"TN"}>TamilNadu</option>
                <option value={"AP"}>Andhra</option>
                <option value={"KER"}>Kerala</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.state}</span>

              <br />

              <label className="form-label">City:</label>
              <br />
              <select
                name="city"
                className={`form-control ${
                  myFormik.errors.city ? `is-invalid` : `is-valid`
                }`}
                onChange={myFormik.handleChange}
              >
                <option value={""}>---Select---</option>
                <option value={"CHN"}>Chennai</option>
                <option value={"VLR"}>Vellore</option>
                <option value={"CBE"}>Coimbatore</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.city}</span>

              <br />
              <input
                disabled={isLoading}
                type="Submit"
                value={isLoading ? "Loading" : "Create"}
                className="btn btn-primary"
              ></input>
              <br />
              {JSON.stringify(myFormik.values)}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCreate;
