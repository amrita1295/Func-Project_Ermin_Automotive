import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-footer pb-10">
      <footer className="footer p-10 ">
        <div>
          <p className="xtra-title mt-10 text-white">
            <span className="font-bold">XTR</span>ALIVING
          </p>
        </div>
        <div>
          <span className="title text-white">EXPLORE</span>
          <a className="foot">Branding</a>
          <a className="foot">Design</a>
          <a className="foot">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="title text-white">ABOUT</span>
          <a className="foot">Blog</a>
          <a className="foot">Careers</a>
          <Link className="foot" to={"/about"}>About Us</Link>
        </div>
        <div>
          <span className="title text-white">HELP</span>
          <a className="foot">Support</a>
          <a className="foot">Contact</a>
        </div>
      </footer>
      <div className="border-bottom"></div>

      <div className="flex justify-center">
        <div className="privacy p-4">
          Privacy <span className="inline-block mr-10 ml-10 line">|</span> Terms
        </div>
      </div>

      <div className="social flex lg:justify-end justify-center lg:mr-12 mr-0 lg:mt-0 mt-4">
        <a href="#"><FaLinkedin className="mr-5"></FaLinkedin></a>
        <a href="#"><FaInstagramSquare className="mr-5"></FaInstagramSquare></a>
        <a href="#"><FaTwitter className="mr-5"></FaTwitter></a>
        <a href="#"><FaFacebook className="mr-5"></FaFacebook></a>
      </div>
    </div>
  );
};

export default Footer;
