import React, { useEffect, useState } from "react";
import { getStoresData } from "../utils/fakeDb";
import { useLoaderData } from "react-router-dom";
import JobItems from "./JobItems";

const AppliedJobs = () => {
  const { jobs } = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-semibold bg-indigo-50 pt-8 pb-12 text-center">
        Applied Jobs
      </h1>
      <h1 className="text-3xl font-semibold text-center mt-8">
        {jobs.length ? "Review Jobs" : "Jobs Empty"}
      </h1>
      <div className="flex flex-col md:px-32">
        {jobs.map((job) => (
          <JobItems key={job.id} job={job}></JobItems>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
