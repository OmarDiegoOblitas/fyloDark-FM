import React from "react";
import logo from "../public/icons/logo.svg";

const Header=()=> {
  const links = ["Features", "Team", "Sign in"];
  return (
    <nav className="flex justify-between p-20">
      <img src={logo} alt="" />
      <div className="flex gap-16">
        {links.map((link, index) => (
          <span key={index}>
            <a href="#" className="text-white ">
              {link}
            </a>
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Header