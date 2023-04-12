import { getStoresData } from "../utils/fakeDb";

// setAppliedJob(jobs);

export const handleJobs = async () => {
  const appliedJobsData = await fetch("job.json");
  const jobsData = await appliedJobsData.json();

  const saveJobs = getStoresData();
  let jobs = [];

  for (const id in saveJobs) {
    const foundJobs = jobsData.find((job) => job.id === id);
    if (foundJobs) {
      jobs.push(foundJobs);
    }
  }
  return {jobs}
};
