import React, { useEffect, useState } from "react";
import SingleSection from "./SingleSection";
const Section = () => {
  const [sections, setSections ]= useState([]);
  // console.log(sections)
  useEffect(() => {
    fetch('sectionData.json')
        .then(res => res.json())
        .then(data => setSections(data))
}, []);

  return (
    <div className="md:px-24">
      <div className="text-center mt-12">
        <h1 className="text-3xl font-bold mb-4">Job Category List</h1>
        <p>
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
      </div>
      <div>
      {
        sections.map(section => <SingleSection key={section.id} section={section}></SingleSection>)
      }
      </div>
    </div>
  );
};

export default Section;
