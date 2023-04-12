import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componets/Home";
import ErrorPage from "./Componets/ErrorPage";
import Blog from "./Componets/Blog";
import JobDetails from "./Componets/JobDetails";
import Chart from "./Componets/Chart";
import AppliedJobs from "./Componets/AppliedJobs";
import { handleJobs } from "./loaders/getJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <div>this is about</div>,
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/job.json"),
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: handleJobs
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statistics",
        element: <Chart></Chart>,
      },
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/job.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
