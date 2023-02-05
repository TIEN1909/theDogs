import React from "react";
import "./footer.css";
import FooterTop from "./FooterTop";
import FooterCenter from "./FooterCenter";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <FooterTop />
        </div>
        <section className="footer-container">
          <div className="footer-center">
            <FooterCenter />
          </div>
        </section>
        <div className="footer-bootom">
          <p>Made with Vo Thanh Tien © 2023</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
