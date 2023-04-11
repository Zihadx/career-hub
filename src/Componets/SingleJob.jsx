import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faDollar } from "@fortawesome/free-solid-svg-icons";

const SingleJob = ({ job }) => {
  const { image, title, name, job_category, location, salary } = job;
  return (
    <div className="grid grid-cols-2 md:px-24">
      <div className="border border-spacing-1 p-6 mt-8">
        <img className="w-32 h-12 mb-4" src={image} alt="" />
        <h1>{title}</h1>
        <p>{name}</p>
        <Link>
          <button class="outline-indigo-600 outline-offset-2 px-2 border border-spacing-2 rounded-sm mr-4 my-4">
            {job_category[0]}
          </button>
        </Link>

        <Link>
          <button class="outline-indigo-600 outline-offset-2 px-2 border border-spacing-2 rounded-sm mr-4 my-4">
            {job_category[1]}
          </button>
        </Link>

        <div className="flex">
          <p className="mr-4">
          <FontAwesomeIcon className="mr-2 text-gray-500" icon={faLocationDot} />   
            <small >{location}</small>
          </p>
          <p>
          <FontAwesomeIcon className="mr-2 text-gray-500" icon={faDollar} /> 
            <small>{salary}</small>
          </p>
        </div>
        <button className="bg-indigo-500 p-2 rounded-md text-white font-semibold mt-8">
          View Details
        </button>
      </div>
      
    </div>
  );
};

export default SingleJob;
