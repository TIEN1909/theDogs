import React from "react";
import { HiPhoneIncoming } from "react-icons/hi";
import { AiFillContacts, AiOutlineToTop } from "react-icons/ai";
function FooterTop() {
  return (
    <>
      <div className="footer-phone">
        <HiPhoneIncoming /> 09422745589
      </div>
      <div className="footer-contact">
        <AiFillContacts /> Business contact
      </div>
      <div className="footer-phone">
        <AiOutlineToTop /> On top
      </div>
    </>
  );
}

export default FooterTop;
