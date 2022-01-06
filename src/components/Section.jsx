import React from "react";
import image from "../public/images/illustration-intro.png";

const Section = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="p-10 flex justify-center">
        <img src={image} alt="" />
      </div>
      <span className="font-bold text-center xl:px-56 text-5xl">
        All your files in one secure location, accessible anywhere.
      </span>
      <p className="font-normal text-center xl:px-80 m-16">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 w-64 rounded-full ">
        Get Started
      </button>
    </div>
  );
};

export default Section;
