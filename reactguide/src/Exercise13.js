import { useState } from "react";

const fruits = [
  { id: 1, name: "Apple", price: 200 },
  { id: 2, name: "Orange", price: 110 },
  { id: 3, name: "Grapes", price: 50 },
  { id: 4, name: "Pineapple", price: 75 },
];

export const Exercise13 = () => {
    const [highlight,sethighlight] = useState(false);

    const shouldHighlight =()=>{
        sethighlight((highlight)=> highlight=true);
    }

    const resetHighlight = ()=>{
        sethighlight(false);
    }

  return (
    <div>
      <ol>
        {fruits.map(({ id, name, price }) => (
          <li key={id} style={{color : highlight && price > 100 ? "red":"black"}}>
            {name}: Rs{price}
          </li>
        ))}
      </ol>
      <button onClick={shouldHighlight}>Highlight costly fruit</button>
      <button onClick={resetHighlight}>Reset</button>
      <p>--------------------------------------------------------------------------------------------</p>
    </div>
  );
};
