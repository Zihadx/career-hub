import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <nav className="bg-indigo-50 md:px-24 py-8">
        <div className="md:flex items-center md:justify-between">
          <div>
            <h3 className="text-3xl font-bold text-indigo-500">JobHunter</h3>
          </div>
          <div className="flex gap-8 items-center">
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied-jobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div>
            <button className="bg-indigo-500 p-2 rounded-md text-white font-semibold">
              Start Applying
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
