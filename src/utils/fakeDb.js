const addToDb = (id) => {
  let appiedJobs = {};
  const storedJobs = localStorage.getItem("appied-jobs");
  if (storedJobs) {
    appiedJobs = JSON.parse(storedJobs);
  }
  const quantity = appiedJobs[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    appiedJobs[id] = newQuantity;
  } else {
    appiedJobs[id] = 1;
  }
  localStorage.setItem("appied-jobs", JSON.stringify(appiedJobs));
};
export { addToDb };
