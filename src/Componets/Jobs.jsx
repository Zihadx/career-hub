import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleJob from "./SingleJob";

const Jobs = () => {
  const jobs = useLoaderData();
  const [data, setData] = useState(jobs.slice(0, 4));
  const jobData = () => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  console.log(data);
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-12 mb-4">Featured Jobs</h1>
        <p>
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {data.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>

      <div className="text-center mb-8">
        <Link to="/">
          {data.length < jobs.length && (
            <button
              onClick={jobData}
              className="bg-indigo-500 p-2 rounded-md text-white font-semibold mt-8"
            >
              See more job
            </button>
          )}
        </Link>
      </div>
    </>
  );
};

export default Jobs;
