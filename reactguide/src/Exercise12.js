import { useState } from "react";

export const Exercise12 = () => {
  const [count, setcount] = useState(0);

  const handleclick = () => {
    setcount((count) => count + 1);
  };
  const handledecremant = () => {
    setcount((count) => count - 1);
  };
  const handlereset = () => {
    setcount((count) => (count = 0));
  };
  return (
    <div>
      <h1 style={{ color: count > 10 ? "red" : "black" }} onClick={handleclick}>
        {count}
      </h1>
      <button onClick={handleclick}>+</button>
      <button onClick={handledecremant}>-</button>
      <button onClick={handlereset}>Reset</button>
      <p>--------------------------------------------------------------------------------------------</p>
    </div>
  );
};
