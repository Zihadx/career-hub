import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollar,
  faBookAtlas,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../utils/fakeDb";

const JobDetails = () => {
  const { id } = useParams();
  const jobDetails = useLoaderData();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const data = jobDetails.find((job) => job.id == id);
    setDetails(data);
  }, [id]);
  // console.log(data)
  const {
    description,
    responsibilities,
    requirements,
    experiences,
    phone,
    address,
    email,
    salary,
    title,
  } = details;

  const handleAddToCart =(id)=>{
    console.log(id)
    addToDb(id)
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-indigo-50 pt-8 pb-16">
        Job Details
      </h1>
      <div className="md:flex md:justify-between md:px-24 mt-8 gap-4">
        <div>
          <h2>
            <span className="font-bold">Job Description:</span>{" "}
            <small>{description}</small>
          </h2>
          <h2 className="mt-8 mb-8">
            <span className="font-bold">Job Responsibilities:</span>{" "}
            <small>{responsibilities}</small>
          </h2>
          <h2 className="mt-8 mb-8">
            <span className="font-bold">Educational Requirements:</span> <br />{" "}
            <small>{requirements}</small>
          </h2>
          <h2 className="mt-8 mb-8">
            <span className="font-bold">Experiences:</span> <br />{" "}
            <small>{experiences}</small>
          </h2>
        </div>
        <div className="w-full h-full">
          <div className="bg-indigo-100 rounded-sm p-4 ">
            <h3 className="font-bold">Job Details</h3>
            <hr
              style={{
                background: "gray",
                color: "gray",
                borderColor: "gray",
                height: "1px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />
            <h3>
              <FontAwesomeIcon className="mr-2 text-gray-500" icon={faDollar} />
              <span className="font-bold">Salary : </span>
              <small>{salary}</small>
            </h3>
            <h3>
              <FontAwesomeIcon
                className="mr-2 w-3 h-3 text-gray-500"
                icon={faBookAtlas}
              />
              <span className="font-bold">Job Title : </span>
              <small>{title}</small>
            </h3>

            <h3 className="font-bold mt-6">Contact Information</h3>
            <hr
              style={{
                background: "gray",
                color: "gray",
                borderColor: "gray",
                height: "1px",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />
            <h3>
              <FontAwesomeIcon
                className="mr-2 w-3 h-3 text-gray-500"
                icon={faPhone}
              />
              <span className="font-bold">Phone : </span>
              <small>{phone}</small>
            </h3>
            <h3>
              <FontAwesomeIcon
                className="mr-2 w-3 h-3 text-gray-500"
                icon={faMailBulk}
              />
              <span className="font-bold">Email : </span>
              <small>{email}</small>
            </h3>
            <h3>
              <FontAwesomeIcon
                className="mr-2 w-3 h-3 text-gray-500"
                icon={faLocationDot}
              />
              <span className="font-bold">Address : </span>
              <small>{address}</small>
            </h3>
          </div>
          <Link>
            <button onClick={()=>handleAddToCart(id)} className="bg-indigo-500 p-2 rounded-md text-white font-semibold w-full mt-4">
            Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
