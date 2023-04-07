import { useState } from "react";

const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];

export const Question3 = () => {
  const [highveg, sethighveg] = useState(false);
  const [highfruits, sethighfruits] = useState(false);

  const displayveg = () => {
    sethighveg(!highveg);
  };

  const displayfruits = () => {
    sethighfruits(!highfruits);
  };

  const displayall = () => {
    sethighfruits((highfruits) => (highfruits = true));
    sethighveg((highveg) => (highveg = true));
  };

  return (
    <div>
      <h2>Question 3</h2>
      <button onClick={displayall} style={{ padding: "10px", margin: "10px" }}>All</button>
      <button
        style={{ padding: "10px", margin: "10px" }}
        onClick={displayfruits}
      >
        Fruits
      </button>
      <button style={{ padding: "10px", margin: "10px" }} onClick={displayveg}>
        Vegetables
      </button>
      <div>
        {highveg &&
        itemList.reduce(
          (acc, curr) =>
            curr.category === "Vegetable"
              ? [...acc, <li style = {{color:"green"}} key={curr.id}> {curr.name}</li>]
              : acc,
          []
        )}
        </div>
        <div>
        {highfruits &&
          itemList.reduce(
            (acc, curr) =>
              curr.category === "Fruit"
                ? [
                    ...acc,
                    <li style={{ color: "orange" }} key={curr.id}>
                      {" "}
                      {curr.name}
                    </li>,
                  ]
                : acc,
            []
          )}
      </div>
    </div>
  );
};
