import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-indigo-50 pt-8 pb-16">
        Blogs Details
      </h1>
      <div className="mt-12 md:px-24">
        <h2 className="text-2xl font-bold my-4">When Should you use context API ?</h2>
        <p><span className="font-bold ps-8">Ans: </span>The Context API in React is used to manage global application state and share data across components without the need to pass down props through intermediate components. context API is a powerful tool for managing global application state and sharing data across components in a React application. It can simplify my code and make my application more scalable and maintainable.</p>
        <h2 className="text-2xl font-bold my-4"> What is Custom Hooks ?</h2>
        <p><span className="font-bold ps-8">Ans: </span> Custom Hooks are a powerful tool for reusing stateful logic in React applications.Custom Hooks are a way to reuse stateful logic in React applications. In React, hooks are functions that allow me to use state and other React features in functional components, which were previously only available in class components. Custom Hooks are simply functions that use one or more of the built-in React hooks, like useState or useEffect, to provide a reusable piece of logic that can be used across multiple components in my application.</p>

        
        <h2 className="text-2xl font-bold my-4">What is useRef ?</h2>
        <p><span className="font-bold ps-8">Ans: </span>useRef is a hook in React that is used to create a mutable ref object that can be used to store a reference to a DOM element or a component instance variable. It provides a way to interact with the DOM and access component instance variables in functional components.</p>

        <h2 className="text-2xl font-bold my-4">What is useMemo ?</h2>
        <p><span className="font-bold ps-8">Ans: </span>useMemo is a hook in React that is used to memoize the result of an expensive computation. It is useful for optimizing the performance of React components by reducing unnecessary re-renders.</p>


      </div>
    </div>
  );
};

export default Blog;
