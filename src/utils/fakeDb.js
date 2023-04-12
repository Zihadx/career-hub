const addToDb = (id) => {
  let appliedJobs = {};
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  const quantity = appliedJobs[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    appliedJobs[id] = newQuantity;
  } else {
    appliedJobs[id] = 1;
  }
  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

const getStoresData = () => {
  let appliedJobs = {};
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  return appliedJobs
};

export { addToDb, getStoresData };
