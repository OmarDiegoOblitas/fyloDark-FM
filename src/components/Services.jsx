import React from "react";
import image1 from "../public/icons/icon-collaboration.svg";
import image2 from "../public/icons/icon-access-anywhere.svg";
import image3 from "../public/icons/icon-security.svg";
import image4 from "../public/icons/icon-any-file.svg";

const Services = () => {
  const intro = [
    {
      image: image1,
      title: "Access your files",
      text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.anywhere",
    },
    {
      image: image2,
      title: "Security you can trust",
      text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
      image: image3,
      title: "Real-time collaboration",
      text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
      image: image4,
      title: "Store any type of file",
      text: "Whether you´re sharing holidays photos or work documents,Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <div className="grid xl:grid-cols-2 gap-20 p-32 justify-center">
      {intro.map(({ image, title, text }, index) => (
        <div className="grid justify-items-center" key={index}>
          <img className=" " src={image} alt="" />
          <div className="p-8">{title}</div>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
