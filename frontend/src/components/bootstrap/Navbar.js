import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header class="d-flex justify-content-center py-3">
      <div class="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          class="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <img
            src="https://adroitmanufacturing.allmoxy.com/data/header/Adroit_logo_3d-01-01.png"
            alt="adroit-manufacturing-logo"
            width={120}
            height={50}
          />
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" class="nav-link px-2 link-secondary">
            Home
          </a>
        </li>
        <li>
        <a href="/" class="nav-link px-2">
        <Link to="/report">
            Report
          </Link>
          </a>
        </li>
        <li>
          <a href="/" class="nav-link px-2">
            Pricing
          </a>
        </li>
        <li>
          <a href="/" class="nav-link px-2">
            FAQs
          </a>
        </li>
        <li>
          <a href="/" class="nav-link px-2">
            About
          </a>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        <Link to="/login">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>        </Link>
        <Link to="/register">
        <button type="button" class="btn btn-primary">Sign up</button>
        </Link>
      </div>
    </header>
  );
}
