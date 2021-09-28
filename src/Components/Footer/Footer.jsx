import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_options">
        <div className="footer_row">
          <h4>Get to Know Us</h4>
          <span>About Us</span>
          <span>Careers</span>
          <span>Press Releases</span>
          <span>Amazon Cares</span>
          <span>Gift a Smile</span>
        </div>
        <div className="footer_row">
          <h4>Connect with Us</h4>
          <span>Facebook </span>
          <span> Twitter </span>
          <span> Instagram</span>
        </div>
        <div className="footer_row">
          <h4>Make Money with Us</h4>
          <span>Sell on Amazon</span>
          <span>Sell under Amazon Accelerator</span>
          <span>Amazon Global Selling</span>
          <span>Become an Affiliate</span>
          <span>Fulfilment by Amazon</span>
          <span>Advertise Your Products</span>
          <span>Amazon Pay on Merchants</span>
        </div>
      </div>
      <hr />
      <div className="footer_logo">
        <img
          src="http://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
