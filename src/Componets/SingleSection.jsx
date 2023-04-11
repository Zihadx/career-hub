import React from "react";
const SingleSection = ({ section }) => {
  return (
    <li className="flex flex-col mt-8 sm:flex-row sm:justify-between">
      <div className="bg-indigo-50 p-8 rounded-md w-64 h-48">
        <h1 className="text-xl font-semibold">{section.title}</h1>
        <p className="mt-4"><small>{section.description}</small></p>
      </div>
    </li>
  );
};
//
export default SingleSection;
