import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Realm from "realm-web";

import "../../App.css";

const REALM_APP_ID = "application-0-hxfdv"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  async function emailLogin(e) {
    e.preventDefault();
    try {
      const credentials = Realm.Credentials.emailPassword(email, password);
      // Authenticate the user
      const userinfo = await app.logIn(credentials);
      setUser(userinfo);
      // `App.currentUser` updates to match the logged in user
      //window.location.href = '/'+user.id;
      // try {
      //   if (user_id.length > 2) {
      //     const data = {
      //       email: email,
      //       password: password,
      //       user_id: user_id,
      //     };
      //     await axios
      //       .post(
      //         "https://us-east-1.aws.data.mongodb-api.com/app/application-0-hxfdv/endpoint/login",
      //         data
      //       )
      //       .then((response) => {
      //         console.log(response.data[0]);
      //         console.log(response.data[0].permision_id);
      //         if (response.data[0].permision_id === 1) {
      //           window.location.href = "/shop/" + response.data[0].user_id;
      //         } else {
      //           window.location.href = "/home/" + response.data[0].user_id;
      //         }
      //       })
      //       .catch((e) => {
      //         console.log(e);
      //         setErrorMessage(e.error.toString());
      //       });
      //   }
    } catch (error) {
      //console.error('Failed to register user:', error);
      console.log(error.error.toString());
      setErrorMessage(error.error.toString());
    }
  }

  // async function GuestLogin(e) {
  //   e.preventDefault();
  //   const credentials = Realm.Credentials.anonymous();
  //   // Authenticate the user
  //   const user = await app.logIn(credentials);
  //   setUser(user);
  //   // `App.currentUser` updates to match the logged in user
  //   console.assert(user.id === app.currentUser.id);
  //   window.location.href = '/'+user.id;
  //   return user;
  // }

  return (
    <Fragment>
      <div
        className="modal modal-sheet position-static d-block p-4 py-md-5"
        tabIndex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Sign in to us</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-5 pt-0">
              <form className="">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={onChangeEmail}
                  />
                  <label>email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                  />
                  <label>Password</label>
                  <Link to="/forget-password">
                    <label className="right-label">Forget password?</label>
                  </Link>
                </div>
                <div style={{ color: "red" }}>{errorMessage}</div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                  onClick={emailLogin}
                >
                  Sign in
                </button>
                {/* 
                <small className="text-body-secondary">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr className="my-4" />
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                  onClick={GuestLogin}
                >
                  Sign in as Guest
                </button>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                  type="submit"
                >
                  Sign in with Google
                  <i className="bi bi-google-fill btn"></i>
                </button>
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                  type="submit"
                >
                  Sign in with Facebook
                </button> */}
              </form>
              <footer>
                <p>
                  First time? <Link to={"/register"}>Create an account</Link>.
                </p>
                <p>
                  <Link to="/">Back to Homepage</Link>.
                </p>
              </footer>
            </div>
          </div>
        </div>
        <div>
          <h1>Print Object Example</h1>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
        <div>
          <h1>Logged in with anonymous id: {user.id}</h1>
        </div>
      </div>
    </Fragment>
  );
}
