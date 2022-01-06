import React from "react";
import logo from "../public/icons/logo.svg";
import location from "../public/icons/icon-location.svg";
import phone from "../public/icons/icon-phone.svg";
import email from "../public/icons/icon-email.svg";

const Footer = () => {
  const links = [
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ];

  return (
    <div className="grid grid-cols-1 xl:auto-rows-min gap-2 pt-16 bg-slate-900">
      <div className="flex-col xl:mx-44 -my-36 mb-4 bg-slate-700 rounded-md">
        <span className="flex justify-center text-3xl font-bold my-6">
          Get early access today
        </span>
        <p className="text-center px-6 xl:px-40 mb-8">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 my-8">
          <input
            type="email"
            name=""
            id=""
            className="w-96 h-10 rounded-full"
          />
          <input
            type="button"
            value="Get Started For Free"
            className="h-10 bg-gradient-to-r from-cyan-500 to-blue-500 w-56 rounded-full "
          />
        </div>
      </div>
      <div className="h-16 pl-24 mt-10 .-mb-2">
        <img src={logo} alt="" />
      </div>

      <div className="grid xl:grid-cols-6 gap-4">
        <div className="col-span-2 flex justify-center pl-16 my-12">
          <img src={location} alt="" className="h-5 pr-6 " />
          <p className="text-center mr-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex flex-col py-8 mx-16">
          <div className="flex gap-4 items-center my-6 ">
            <img src={phone} alt="" />
            <span>+1-543-123-4567</span>
          </div>
          <div className="flex gap-4 items-center">
            <img src={email} alt="" />
            <span>example@fylo.com</span>
          </div>
        </div>
        <div className="col-span-2 gap-10">
          <span className="grid xl:grid-cols-2 p-4 gap-4 mx-12">
            {links.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </span>
        </div>
        <div className="flex justify-center items-center pb-12 gap-4 w-32 mt-8 mx-32 ">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
