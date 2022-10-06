import PizzaType from "./PizzaType";
import Toppings from "./Toppings";
import { useState } from "react";
import pizzaTypes from "../resources/pizzaTypes";

function PizzaForms(props) {
  const [type, setType] = useState("");
  const [toppingsList, setToppingsList] = useState([]);
  const [isDisabled, setIsDisabled] = useState([true]);
  const [pizzaConfig, setPizzaConfig] = useState({
    Olives: false,
    Pepperoni: false,
    Peppers: false,
    Garlic: false,
    Onion: false,
    Cheese: false
  });

  const typeChangeHandler = (event) => {
    setPizzaConfig(pizzaTypes[event.target.value]);
    setType(event.target.value);
    if (event.target.value === "Build Your Own") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const addToppingsChangeHandler = (event) => {
    if (pizzaConfig[event.target.name]) {
      setPizzaConfig({ ...pizzaConfig, [event.target.name]: false });
    } else {
      setPizzaConfig({ ...pizzaConfig, [event.target.name]: true });
    }

    if (!event.target.checked) {
      setToppingsList(
        toppingsList.filter((topping) => topping != event.target.value)
      );
    } else {
      setToppingsList((prevToppingsList) => {
        return [...prevToppingsList, event.target.value];
      });
    }
  };
  return (
    <div className="new-expense-controls">
      <PizzaType typeChangeHandler={typeChangeHandler} />
      <Toppings
        disabled={isDisabled}
        addToppingsChangeHandler={addToppingsChangeHandler}
        pizzaConfig={pizzaConfig}
      />
    </div>
  );
}

export default PizzaForms;
