import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.png";
const Contact = () => {
  return (
    
    <div className="mt-16 bg-contact pb-10">
      <div class="container-1">
        <img src={contact} alt="Snow" className="w-full" />
        <div class="centered font-semibold text-3xl">Contact</div>
      </div>
      <div className="lg:px-12 mx-8 mt-9">
        <h1 className="contact-title">Contact me</h1>

        <div className="border-left flex items-center font-bold mt-8">
          <p className="ml-3 text-[#000000]">Email</p>
        </div>
        <div className="mt-3">
          <p>Personal: </p>
          <p>Business:</p>
        </div>
      </div>

      <div className="">
        <h1>Contact Our Team</h1>
      </div>

    </div>
  );
};

export default Contact;
