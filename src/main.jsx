import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componets/Home";
import ErrorPage from "./Componets/ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <div>this is about</div>
//   },
//   {
//     path: '/contact',
//     element: <div>this is contact</div>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { 
        path: "/about",
        element: <div>this is about</div>
      },
      { 
        path: "/contact",
        element: <div>this is contact</div>
      },
      { 
        path: "/blog",
        element: <div>this is blog</div>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
