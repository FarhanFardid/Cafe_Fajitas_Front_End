import React from "react";

const Blog = () => {
  return (
    <div className="bg-secondary">
      <h2 className="fs-3 fw-bold text-center p-3">Welcome to Blogs </h2>
      <article className="p-3 mt-2">
        <p className="ts-4 fw-bold text-dark p-2">
          1. Differences between uncontrolled and controlled components?
        </p>
        <p className="fs-6 text-white p-2">
          Components can be classified as controlled or uncontrolled based on
          how they manage their state and data. An uncontrolled component is a
          component where the form data is handled by the DOM itself, without
          React controlling or tracking its state. In other words, the component
          has its own internal state that is not being managed by React. The
          state of an uncontrolled component can be accessed through the DOM
          API, such as by using document.getElementById(). A controlled
          component is a component where the form data is controlled by React.
          The state of a controlled component is managed by React, and every
          time the user interacts with the component, React updates its state
          and re-renders the component. Controlled components use React's
          setState() method to update their state and pass it down to their
          child components as props. Controlled components are often used when
          you need to have more control over the form data and perform more
          complex logic based on the user input.{" "}
        </p>
      </article>
      <article className="p-3 mt-2">
        <p className="ts-4 fw-bold text-dark p-2">
          2. How to validate React props using PropTypes?
        </p>
        <p className="fs-6 text-white p-2">
          We combine components into an app by passing data from parent
          components to child components. To do this, we pass data with props.
          Props are like HTML attributes, but they can contain dynamic data. A
          parent component passes props down to child components. And child
          components receive them. We can pass any data as props. Therefore, we
          need a way to validate their data type so that the child component
          gets what they expect.<br></br> Here are some common prop types you
          can use with PropTypes:<br></br>1. PropTypes.string: Validates that
          the prop is a string.
          <br></br>2. PropTypes.number: Validates that the prop is a number.{" "}
          <br></br>3. PropTypes.bool: Validates that the prop is a boolean.
          <br></br>4. PropTypes.func: Validates that the prop is a function.
          <br></br>5. PropTypes.array: Validates that the prop is an array.
          <br></br>6. PropTypes.object: Validates that the prop is an object.
          <br></br>7. PropTypes.shape: Validates that the prop is an object that
          matches a specific shape. <br></br>8. PropTypes.instanceOf: Validates
          that the prop is an instance of a specific class.{" "}
        </p>
      </article>
      <article className="p-3 mt-2">
        <p className="ts-4 fw-bold text-dark p-2">
          3. Difference between node js and express js?
        </p>
        <p className="fs-6 text-white p-2">
          Node.js is a server-side JavaScript runtime environment that allows
          developers to write and run server-side applications using JavaScript.
          It provides a set of built-in modules that can be used to handle
          various tasks such as file I/O, networking, and more.<br></br>{" "}
          Express.js, on the other hand, is a popular web application framework
          for Node.js. It is built on top of Node.js and provides a higher-level
          interface for building web applications, allowing developers to create
          robust and scalable web applications quickly and easily.{" "}
        </p>
      </article>
      <article className="p-3 mt-2">
        <p className="ts-4 fw-bold text-dark p-2">
          4. What is a custom hook, and why will you create a custom hook?
        </p>
        <p className="fs-6 text-white p-2">
          A custom hook is a JavaScript function that allows you to extract
          reusable logic from a React component. Custom hooks are a way to share
          logic between multiple components without having to duplicate code.
          Custom hooks are created by prefixing the function name with the word
          "use". A custom hook that fetches data from an API might
          be called useFetch.<br></br>
          One sould create a custom hook to extract reusable logic from a
          component and make it available to other components. This can help
          reduce code duplication and make your code more modular and easier to
          maintain. Custom hooks can be used to handle complex state management,
          perform side effects, or handle any other task that can be abstracted
          into a reusable function. By using custom hooks, you can improve the
          reusability and maintainability of your codebase, making it easier to
          add new features and fix bugs.{" "}
        </p>
      </article>
    </div>
  );
};

export default Blog;
