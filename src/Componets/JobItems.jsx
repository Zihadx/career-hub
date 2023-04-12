import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JobItems = ({ job,id }) => {
  const { image, title, name ,salary, job_category , location} = job;
  return (
    <div className="md:flex justify-between items-center border p-5 my-4 md:w-3/4 mx-auto">
      <div className="md:flex gap-8">
        <div className="bg-indigo-100 rounded-md flex justify-center items-center">
          <img className="w-32 h-12 p-3 " src={image} alt="" />
        </div>
        <div>
            <h2>{title}</h2>
            <p>{name}</p>
        <Link>
          <button class="outline-indigo-600 text-indigo-600 outline-offset-2 px-2 border border-spacing-2 rounded-sm mr-4 my-4">
            {job_category[0]}
          </button>
        </Link>
        <Link>
          <button class="outline-indigo-600 text-indigo-600 outline-offset-2 px-2 border border-spacing-2 rounded-sm mr-4 my-4">
            {job_category[1]}
          </button>
        </Link>
        <div className="flex">
          <p className="mr-4">
            <FontAwesomeIcon
              className="mr-2 text-gray-500"
              icon={faLocationDot}
            />
            <small>{location}</small>
          </p>
          <p>
            <FontAwesomeIcon className="mr-2 text-gray-500" icon={faDollar} />
            <small>{salary}</small>
          </p>
        </div>
        </div>
      </div>
      <div>
        {/* to ={`/details/${id}`} */}
      <Link to= {`/details/${id}`}>
          <button className="bg-indigo-500 p-2 rounded-md text-white font-semibold mt-8">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobItems;
