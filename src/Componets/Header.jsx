import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-indigo-50 px-24 py-8">
      <nav className="">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold text-indigo-500">CareerHub</h3>
          </div>
          <div className="flex gap-8 ">
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied-jobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div>
            <button className="bg-indigo-500 p-2 rounded-md text-white font-semibold">Start Applying</button>
          </div>
        </div>
      </nav>
        <div className="flex ">
            <div>
                <h1 className="text-5xl font-semibold mt-8 mb-4">One Step <br /> Closer To Your <br /> <span className="text-indigo-500">Dream Job</span></h1>
                <p><small>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</small></p>
                <button className="bg-indigo-500 p-2 rounded-md text-white font-semibold mt-8">Get Started</button>
            </div>
           
            
        </div>
      
    </div>
  );
};

export default Header;
