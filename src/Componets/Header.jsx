import React from "react";
import { Link } from "react-router-dom";
import img from "../image/img.png";

const Header = () => {
  return (
    <div className="bg-indigo-50 px-24 py-8">
      
      <div className="md:flex md:justify-between items-center py-6">
        <div className="">
          <h1 className="text-5xl font-semibold mt-8 mb-4">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-indigo-500">Dream Job</span>
          </h1>
          <p>
            <small>
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all{" "}
              <br /> your job application from start to finish.
            </small>
          </p>
          <button className="bg-indigo-500 p-2 rounded-md text-white font-semibold mt-8">
            Get Started
          </button>
        </div>
        <div>
          <img className="h-96" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
