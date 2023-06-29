import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Realm from "realm-web";
import NavbarBeforeLogin from "../navbar/NavbarBeforeLogin";

import "../../App.css";

const REALM_APP_ID = "application-0-hxfdv"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const [zipcode,setZipcode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeReEnterPassword = (e) => {
    setReEnterPassword(e.target.value);
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeCompnayName = (e) => {
    setCompanyName(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeState = (e) => {
    setState(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeZipcode = (e) => {
    setZipcode(e.target.value);
  };

  async function onSubmit(e){
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      firstName:firstName,
      lastName:lastName,
      companyName:companyName,
      phoneNumber:phoneNumber,
      street:street,
      state:state,
      city:city,
      zipcode:zipcode,
    };
    try {
      await app.emailPasswordAuth.registerUser({ email, password });
      console.log("User registered successfully!");
      await axios
      .post(
        "https://us-east-1.aws.data.mongodb-api.com/app/application-0-hxfdv/endpoint/register",
        data
      )
      .then((response) => {
      console.log(response)
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.error.toString());
      });
      window.location.href = '/login';
    } catch (error) {
      console.error("Failed to register user:", error);
      setErrorMessage(error.error.toString());
    }
  };

  async function emailSignup(e) {
    e.preventDefault();
    try {
      await app.emailPasswordAuth.registerUser({ email, password });
      console.log("User registered successfully!");
      window.location.href = '/login';
    } catch (error) {
      console.error("Failed to register user:", error);
      setErrorMessage(error.error.toString());
    }
  }

  return (
    <Fragment>
      <NavbarBeforeLogin/>
      <div className="col-md-10 mx-auto col-lg-5">
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary needs-validation">
          <div className="form-floating mb-3 col-14">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={onChangeEmail}
              required
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mb-3 col-14">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
              required
            />
            <label>Password</label>
          </div>
          <div className="form-floating mb-3 col-14">
            <input
              type="password"
              className="form-control"
              id="reEnterFloatingPassword"
              placeholder="Password"
              value={reEnterPassword}
              onChange={onChangeReEnterPassword}
              required
            />
            <label>Re Enter Password</label>
          </div>
          <div className="form-floating mb-3 col-14">
              <input
              type="text"
              className="form-control"
              placeholder="first name"
              value={firstName}
              onChange={onChangeFirstName}
              required
            />
            <label className="form-label">First name</label>
          </div>

          <div className="form-floating mb-3 col-14">
              <input
              type="text"
              className="form-control"
              placeholder="last name"
              value={lastName}
              onChange={onChangeLastName}
              required
            />
            <label className="form-label">Last name</label>
          </div>

          <div className="form-floating mb-3 col-14">
              <input
              type="text"
              className="form-control"
              placeholder="company name"
              value={companyName}
              onChange={onChangeCompnayName}
              required
            />
            <label className="form-label">company name</label>
          </div>

          <div className="form-floating mb-3 col-14">
              <input
              type="text"
              className="form-control"
              placeholder="phone number"
              value={phoneNumber}
              onChange={onChangePhoneNumber}
              required
            />
            <label className="form-label">phone number</label>
          </div>

          <div className="form-floating mb-3 col-14">
              <input
              type="text"
              className="form-control"
              placeholder="street"
              value={street}
              onChange={onChangeStreet}
              required
            />
            <label className="form-label">street</label>
          </div>

          <div className="form-floating mb-3 col-14">
              <input
              type="text"
              className="form-control"
              placeholder="city"
              value={city}
              onChange={onChangeCity}
              required
            />
            <label className="form-label">city</label>
          </div>

          <div className="form-floating mb-3 col-14">
              <input
              type="text"
              className="form-control"
              placeholder="state"
              value={state}
              onChange={onChangeState}
              required
            />
            <label className="form-label">state</label>
          </div>

          <div className="form-floating mb-3 col-14">
              <input
              type="text"
              className="form-control"
              placeholder="zipcode"
              value={zipcode}
              onChange={onChangeZipcode}
              required
            />
            <label className="form-label">zipcode</label>
          </div>


          <div style={{ color: 'red' }}>{errorMessage}</div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={onSubmit}
          >
            Sign up
          </button>
          <hr className="my-4" />
          <small className="text-body-secondary">
            By clicking Sign up, you agree to the terms of use.
          </small>
        </form>
        <footer>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </Fragment>
  );
}
