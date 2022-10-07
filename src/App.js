import React, { useState } from "react";

let toppings = ["Peperoni", "Mushroom", "Paneer", "Jalapeno", "Mozarella"];

export default function App() {
  const [cart, setCart] = useState([]);

  const updateToppings = ({ target }) => {
    const selectedTopping = target.value;
    setCart((prev) => [selectedTopping, ...prev]);
    toppings = toppings.filter((elem) => elem !== selectedTopping);
  };

  return (
    <div>
      <h1>Select Toppings</h1>
      {toppings.map((items) => {
        return (
          <button value={items} onClick={updateToppings}>
            {items}
          </button>
        );
      })}
      <h2>Updated Cart</h2>
      <p>Your selected cart has the following items:</p>
      <ul>
        {cart.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
