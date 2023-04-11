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
      <div>
        {data.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>

     
    </>
  );
};

export default Jobs;
