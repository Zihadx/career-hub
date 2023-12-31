import React from "react";
const SingleSection = ({ section }) => {
  return (
    <div className="md:mt-12 md:8">
      <div className="bg-indigo-50 p-8 rounded-md ">
        <img
          className="w-12 h-12 mb-4 p-2 bg-indigo-100 rounded-md"
          src={section.image}
          alt=""
        />
        <h1 className="text-xl font-semibold">{section.title}</h1>
        <p className="mt-4">
          <small>{section.description}</small>
        </p>
      </div>
    </div>
  );
};
//
export default SingleSection;
