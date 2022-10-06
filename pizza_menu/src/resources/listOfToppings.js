const listOfToppings = ["Olives", "Pepperoni", "Cheese"];

const listOfToppingsChecked = [
  {
    Olives: { checked: false },
    Pepperoni: { checked: false },
    Cheese: { checked: false }
  }
];

 useState({
   Olives: false,
   Pepperoni: false,
   Peppers: false,
   Garlic: false,
   Onion: false,
   Cheese: false
 });

export default listOfToppings;
