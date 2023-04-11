import React, { useState } from "react";
const Section = () => {
//   const [sections, setSections ]= useState([]);
//   useEffect(() => {
//     fetch('sectionData.json')
//         .then(res => res.json())
//         .then(data => setSections(data))
// }, []);

  return (
    <div className="px-24">
      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold mb-4">Job Category List All Job</h1>
        <p>
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
      </div>
      {/* {
        sections.map(section => <SectionData section = {section}></SectionData>)
      } */}
    </div>
  );
};

export default Section;
