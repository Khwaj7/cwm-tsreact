import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Cheese Pizza",
    toppings: ["Mushrooms"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Cheese"],
    });
  };

  return (
    <>
      <button onClick={handleClick}>Change pizza</button>
      <h3>toppings</h3>
      {pizza.toppings.forEach((topp) => {
        console.log(topp);
      })}
    </>
  );
}

export default App;
