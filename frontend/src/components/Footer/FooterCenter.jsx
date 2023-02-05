import React from "react";
import { Link } from "react-router-dom";

const FooterCenter = () => {
  return (
    <>
      <ul className="footer-list">
        <li>
          <Link to={"/"} className="footer-item">
            Introduce
          </Link>
        </li>
        <li>
          <Link to={"/"} className="footer-item">
            Customer
          </Link>
        </li>
        <li>
          <Link to={"/"} className="footer-item">
            Recruitment
          </Link>
        </li>
        <li>
          <Link to={"/"} className="footer-item">
            Delivery
          </Link>
        </li>
        <li>
          <Link to={"/"} className="footer-item">
            Accumulate points
          </Link>
        </li>
      </ul>
      <div className="footer-investor">
        <div className="footer-image">
          <img
            src="https://www.petmart.vn/wp-content/uploads/2019/10/dmca-compliant.png"
            alt=""
          />
        </div>
        <div className="footer-image">
          <img
            src="https://www.petmart.vn/wp-content/uploads/2019/10/dmca-protecte.png?ID=785ceaee-9d79-4b8a-9ab1-a09991c670a3"
            alt=""
          />
        </div>
        <div className="footer-image">
          <img
            src="https://www.petmart.vn/wp-content/uploads/2017/01/bo-cong-thuong.png"
            alt=""
          />
        </div>
        <div className="footer-image">
          <img
            src="https://www.petmart.vn/wp-content/uploads/2020/09/VNCLC.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default FooterCenter;
