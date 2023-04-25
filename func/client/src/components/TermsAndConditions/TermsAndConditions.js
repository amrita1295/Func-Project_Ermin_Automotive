import React from "react";
import "./TermsAndConditions.css";
const TermsAndConditions = () => {
  return (
    <div className="pt-24 terms-bg pb-16">
      <div className=" mx-10">
        <h1 className="terms-title">TERMS & CONDITIONS</h1>
        <p className="mt-5 text-justify">
          Welcome to ankurwarikoo.com (“Website”). Please read the following
          terms and conditions very carefully as your purchase of courses are
          subject to your acceptance of and compliance with the following terms
          and conditions (“Terms”).
        </p>
        <p className="mt-5 text-justify">
          By purchasing the course through any computer, mobile phone or tablet
          or any electronic gadget, you agree that you have read, understood and
          are bound by the Terms.
        </p>

        <p className="mt-5 text-justify">
          These terms and various other policies are binding upon you as per the
          provisions of the Information Technology (Intermediaries guidelines)
          Rules, 2011 formulated under the Information Technology Act of 2000.
        </p>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">
                1. Orders, Payments and Delivery
              </p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify">
              1. 1 Once you purchase a course, you will get the link to the
              course within 10 minutes of purchase. In case of any queries, you
              can always send an email to OUR MAIL ID
            </p>
            <p className="text-justify mt-2">
              1.2 The course is available for a lifetime. You can view it as
              many times as you want, for however long that you want.
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">2. Refund/Cancellations</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify">
            At any point, write to OUR MAIL ID to claim a refund. Once processed, the money will be returned to your original payment mode within 3-5 business working days.
            </p>
          </div>
        </div>


        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">3. Privacy</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify">
            3.1 Privacy Policy: – Please review our privacy policy which governs your purchase of the course to fully understand our practices.
            </p>
            <p className="text-justify mt-2">
            3.2 The User hereby consents, expresses and agrees that he has read and fully understands the Privacy Policy of the website herein. The user further consents that the terms and contents of such Privacy Policy herein are acceptable to them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
<h1>TERMS & CONDITIONS</h1>;
