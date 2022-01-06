import React from "react";
import image from "../public/images/illustration-stay-productive.png";

const Product = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-12 px-16">
      <img src={image}></img>
      <div>
        <span className="text-4xl font-bold xl:pr-64">
          {" "}
          Stay productive, wherever you are
        </span>
        <p className="py-4 mr-20">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="py-4 mr-16">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="text-teal-400 hover:bg-sky-700 font-bold underline"
        >
          See how Fylo works
        </a>
      </div>
    </div>
  );
};

export default Product;
