import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <img
          src="https://tygjaceleczftbswxxei.supabase.co/storage/v1/object/public/image_bucket/Content%20Home%20page/Desktop/Logo_light%20tema_DES.png"
          className="img-fluid d-block mx-auto logo"
          alt="logo"
        />
      </div>
      <div className="footer-menu">
        <div className="wrap">
          <div>
            <a href="home.html"> Chat rooms</a>
          </div>
          <div>
            <a href="#"> Personal chat</a>
          </div>
        </div>
        <div class="wrap">
          <div>
            <a href="#"> Settings</a>
          </div>
          <div>
            <a href="#"> Rools of the chat</a>
          </div>
        </div>
        <div>
          <a href="#"> Privacy Policy</a>
        </div>
      </div>
      <div className="footer-comment">
        <div className="footer-right text-start d-flex">
          <img
            src="https://tygjaceleczftbswxxei.supabase.co/storage/v1/object/public/image_bucket/Content%20Home%20page/Foto%20Plus/Icon%20right_lighttema.svg"
            alt="icon"
          />
          All rights recerved
        </div>
        <div>Site was created Cool Team</div>
      </div>
    </footer>
  );
};

export default Footer;
