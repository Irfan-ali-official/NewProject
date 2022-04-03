import logo from "./logo.svg";
import { Navaar, NavbarBrand } from "reactstrap";
import "./App.css";
import hello from "./screens/HelloWorld";

import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Practice React Js</h1>
      <form>
        <label>
          <input type="text" name="name" placeholder="Name:" />
        </label>
        <label>
          <input type="text" name="name" placeholder="Password:" />
        </label>
        <input type="submit" value="Submit" class="btn btn-primary" />
      </form>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>
    </div>
  );
}
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "You clicked ${count} times";
  });
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me! </button>
    </>
  );
}

function Brand() {
  return (
    <>
      <Properties brand="Ford" />
    </>
  );
}
function Properties(props) {
  return (
    <>
      <p>My name is {props.brand}</p>
    </>
  );
}
export { App, Brand };
