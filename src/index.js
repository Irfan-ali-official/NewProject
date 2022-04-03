import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState, useEffect } from "react";
import { App, Brand } from "./App";
import ExpenseForm from "./ExpenseForm";

import reportWebVitals from "./reportWebVitals";
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Navbar name={this.state.name} />
        {/* Change code above this line */}
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
function Car() {
  return <h1>I am a car</h1>;
}
function Example() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me!{" "}
      </button>
    </>
  );
}
function Truck() {
  return <h1>I am a truck</h1>;
}
function Vehicle(props) {
  const bool = props.val;
  const [count, setCount] = useState(0);
  if (bool) {
    return <Car />;
  }
  {
    return <Truck />;
  }
}
// function Car(props) {
//   return <h2>I am a {props.brand}!</h2>;
// }

function Garage() {
  const element = "Bhaoo";
  const cars = { BMW: { small: "bad", big: "good" }, Audi: "Whoo!" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={element} />
    </>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You clicked {count} times</p>
      <button
        type="button"
        class="btn btn-success"
        onMouseOver={() => setCount(count + 1)}
      >
        Click Me!
      </button>
    </>
  );
}
ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <Garage /> */}
    {/* <Vehicle val={true} />
    <Example />
    <Counter />
    <Navbar /> */}
    <ExpenseForm />
  </React.StrictMode>,
  document.getElementById("root")
);
function hello() {}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
