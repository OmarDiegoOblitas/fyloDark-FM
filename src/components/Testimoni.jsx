import React from "react";
import profile1 from "../public/images/profile-1.jpg";
import profile2 from "../public/images/profile-2.jpg";
import profile3 from "../public/images/profile-3.jpg";

const Testimoni = () => {
  const card = [
    {
      info: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: profile1,
      name: "Satish Patel",
      range: "Founder & CEO, Huddle",
    },
    {
      info: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: profile2,
      name: "Bruce McKenzie",
      range: "Founder & CEO, Huddle",
    },
    {
      info: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: profile3,
      name: "Iva Boyd",
      range: "Founder & CEO, Huddle",
    },
  ];
  return (
    <div className="flex flex-col justify-around mx-40 gap-6 pt-40 mb-36 ">
      {card.map(({ info, image, name, range }, index) => (
        <div className="bg-slate-600 p-8 rounded-lg" key={index}>
          <span>{info}</span>
          <div className="flex items-center mt-6">
            <img className="rounded-full w-8 " src={image} alt="" />
            <div className="pl-2">
              {" "}
              <p className="text-sm">{name}</p>
              <p className="text-2xs">{range}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimoni;
