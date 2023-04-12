import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollar } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-indigo-50 pt-8 pb-16">
        Job Details
      </h1>
      <div className="md:flex md:justify-between md:px-24 mt-8 gap-4">
        <div>
          <p>details</p>
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
        <div className="bg-indigo-100 rounded-sm p-4">
          <p>titljjjyjjyjtyjbhfgshj;hjighaegjaeljhlhlae</p>
          <h3 className="font-bold">Job Details</h3>
          <hr
            style={{
              background: "gray",
              color: "gray",
              borderColor: "gray",
              height: "1px",
              marginTop: "10px",
              marginBottom: "10px"
            }}
          />
          <h3> 
          <FontAwesomeIcon className="mr-2 text-gray-500" icon={faDollar} />
             <span className="font-bold">Salary : </span>
             <small>{salary}</small>
             </h3>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
