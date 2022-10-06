// import listOfToppings from "../resources/listOfToppings";
import CheckboxInput from "./CheckboxInput";
import { useState } from "react";
import "./Toppings.css";

function Toppings(props) {
let listOfToppings = props.pizzaConfig

  const checkboxInputs = Object.keys(listOfToppings).map((topping, index) => (
    <CheckboxInput
      disabled={props.disabled}
      key={index}
      id={index}
      checked={listOfToppings[topping]}
      topping={topping}
      onChange={props.addToppingsChangeHandler}
    />
  ));

  return (
    <div className="toppings">
      TOPPINGS:
      <form>
        <div className="options_container">{checkboxInputs}</div>
      </form>
    </div>
  );
}

export default Toppings;
