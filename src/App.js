import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";

function App() {
  let element = useRoutes(routes);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {element}
    </div>
  );
}

export default App;
