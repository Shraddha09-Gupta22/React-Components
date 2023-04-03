import React from "react";
import Heading from "./Heading"; // importing the component to the react module.
// "./Heading.jsx" is also the valid but it can be run without the extention.
import List from "./List";

function App() {
  return (
    <div>
      <Heading />
      <List />
      <List />
    </div>
  );
}

export default App;
