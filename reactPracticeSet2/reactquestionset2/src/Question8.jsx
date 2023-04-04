import { useState } from "react";

export const Question8 = ({ productlist }) => {
  const [highlight, sethighlight] = useState(false);
  const highlighthandler = () => {
    sethighlight(!highlight);
  };
  return (
    <div>
      <h2>Question 8</h2>
      <ol>
        {productlist.map((item) => (
          <li
            style={{ color: highlight && item.price > 50000 ? "red" : "" }}
            key={item.id}
          >
            Name : {item.name} Description : {item.description} Price :{" "}
            {item.price}
          </li>
        ))}
      </ol>
      <button onClick={highlighthandler}>Highlight Costly Gadget</button>
    </div>
  );
};
