import React, { Fragment, useState } from "react";
import CreateDoor from "./door/CreateDoor";
import NavbarAfterLogin from "../navbar/NavbarAfterLogin";

function Toggle() {
  const [info, setInfo] = useState({
    name: "",
    description: "",
    date: "",
    billing: "",
    shipping: "",
  });
  const [isCabinetClicked, setCabinetClicked] = useState(false);
  const [isDoorClicked, setDoorClicked] = useState(false);
  function cabinetClicked() {
    setCabinetClicked(!isCabinetClicked);
  }

  function doorClicked() {
    setDoorClicked(!isDoorClicked);
  }
  return (
    <Fragment>
      <NavbarAfterLogin/>
      <div className="input-group d-flex justify-content-center">
        <i
          onClick={cabinetClicked}
          className={
            isCabinetClicked
              ? "bi bi-archive-fill btn btn-warning"
              : "bi bi-archive-fill btn btn-outline-warning"
          }
        >
          Cabinet
        </i>
        <i
          onClick={doorClicked}
          className={
            isDoorClicked
              ? "bi bi-door-open-fill btn btn-success"
              : "bi bi-door-open-fill btn btn-outline-success"
          }
        >
          Door
        </i>
      </div>
      <div id="main">
      {isCabinetClicked ? (
          <div className="text-center">
            <h1>Coming Soon!</h1>
          </div>
        ) : (
          <div style={{ display: "none" }}>
            <h1>Coming Soon!</h1>
          </div>
        )}
        {isDoorClicked ? (
          <div>
            <CreateDoor info={info} />
          </div>
        ) : (
          <div style={{ display: "none" }}>
            <CreateDoor info={info} />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Toggle;
