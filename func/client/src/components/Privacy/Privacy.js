import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="pt-24 privacy-bg pb-16">
      <div className=" mx-10">
        <h1 className="privacy-title">PRIVACY POLICY</h1>
        <p className="mt-5 text-justify">
          We respect your right to privacy and are committed to protecting your
          privacy and we will do what we reasonably can to protect the identity
          and private details of all users on this site.
        </p>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Consent</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
              This Privacy Policy applies to your use of OUR MAIL ID (the
              “Website”). It tells you (the customer) what to expect when we
              collect personally identifiable information about you, and what
              your rights are concerning the collection of your information. By
              using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Information we collect</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
              We use the information we collect in the following ways:
            </p>

            <p className="ml-3 list-disc">
              <li className="mt-5">Send you relevant emails (we hate spam).</li>
              <li>Understand and analyze how you use our website</li>
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Your rights</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
              You have the following data protection rights:
            </p>
            <p className="text-justify mt-5 list-disc ml-3">
              <li>
                You may unsubscribe from certain email communications by
                following the unsubscribe link in the email communication
                itself.
              </li>
              <li>
                Similarly, if we have collected and processed your personal
                information on the basis of your consent, then you can withdraw
                your consent at any time. Withdrawing your consent will not
                affect the lawfulness of any processing we conducted prior to
                your withdrawal, nor will it affect the processing of your
                personal information conducted in reliance on lawful processing
                grounds other than consent.
              </li>
              <li>
                If you have any privacy-related questions or unresolved
                problems, you may contact us using the information provided
                below.
              </li>
              <li>
                You have the right to complain to a data protection authority
                about our collection and use of your personal information. For
                more information, please contact your local data protection
                authority.
              </li>
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Children</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
              We take seriously our legal obligation to protect the privacy of
              children. Accordingly, we do not knowingly collect or maintain
              personal information from persons under 13 years of age, and no
              part of the Website is directed to persons under 13 years of age.
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Cookies</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
              The website doesn’t use cookies.
            </p>
          </div>
        </div>

        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Updating this Privacy Policy</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
            This Privacy Policy is regularly reviewed to make sure that we continue to serve your privacy interests and we reserve the right to update it as we deem necessary. This page was last updated on 23 February 2021.
            </p>
          </div>
        </div>


        <div tabIndex={0} className="collapse bg-[#FBF8F0] mt-8">
          <div className="collapse-title text-xl font-medium">
            <div className="border-left flex items-center font-bold">
              <p className="ml-3 text-[#000000]">Contact details</p>
            </div>
          </div>
          <div className="collapse-content">
            <p className="text-justify mt-3">
            If you have any questions, comments, or complaints about this Privacy Policy please contact us at  OUR MAIL ID

            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Privacy;
