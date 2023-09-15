import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary header">
      <div className="left d-flex">
        <img
          src="https://tygjaceleczftbswxxei.supabase.co/storage/v1/object/public/image_bucket/Content%20Home%20page/Desktop/Logo_light%20tema_DES.png"
          class="img-fluid mx-auto d-block logo"
          alt="logo"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse try" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto col center justify-content-between p-5">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Chat rooms{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Personal chat
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Rools of the chat
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div class="toogles">
        <ul class="navbar-nav mr-auto d-flex p-5">
          <li class="nav-item">
            <a class="nav-link toogle" id="lightThem" href="dark-home.html">
              <img
                src="photo/toogle-light.png"
                className="img-fluid mx-auto d-block"
                alt="toggle to the dark them"
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link language" id="lightEnglich" href="#">
              <img
                src="photo/eng.png"
                class="img-fluid mx-auto d-block"
                alt="toggle to the english language"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
