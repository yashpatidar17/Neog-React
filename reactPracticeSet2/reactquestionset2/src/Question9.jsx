import { useState } from "react";

export const Question9 = () => {
  const [code, setcode] = useState(null);
  const colors = [
    { name: "Red", value: "#EE4B2B" },
    { name: "Blue", value: "#89CFF0" },
    { name: "Green", value: "#7FFFD4" },
  ];
  const clickhandler = (code) => {
    setcode(code);
  };

  return (
    <div>
      <h2>Question 9</h2>
      <div>
        {colors.map((item) => (
          <button  onClick={() => clickhandler(item)}>{item.name}</button>
        ))}

        <p>HEX code: {code.value}</p>
      </div>
          </div>
  );

  //     const [selectedColor, setSelectedColor] = useState(null);
  //   const colors = [
  //     { name: 'Red', value: '#EE4B2B' },
  //     { name: 'Blue', value: '#89CFF0' },
  //     { name: 'Green', value: '#7FFFD4' },
  //   ];

  //   const handleColorClick = (color) => {
  //     setSelectedColor(color);
  //   };

  //   return (
  //     <div>
  //       <h2>Select a color:</h2>
  //       <div>
  //         {colors.map((color) => (
  //           <button
  //             key={color.name}
  //             style={{ backgroundColor: color.value }}
  //             onClick={() => handleColorClick(color)}
  //           >
  //             {color.name}
  //           </button>
  //         ))}
  //       </div>
  //       {selectedColor && (
  //         <div>
  //           <p>HEX code: {selectedColor.value}</p>
  //         </div>
  //       )}
  //     </div>
  //   );
//   const red = '#EE4B2B'
//   const blue = '#89CFF0'
//   const green = '#7FFFD4'

//   const [showcode,setshowcode] = useState(null)
  
//   const showcodehandler = () =>{
//       setshowcode((showcode) => showcode =red )
//   }
//       return(
//           <div>
//               <h2>Question 9 </h2>
//               <button onClick={showcodehandler}>Red</button>
//               <p >{showcode}</p>
//               <button onClick={showcodehandler}>Blue</button>
//               <p >{showcode}</p>
//               <button onClick={showcodehandler}>Green</button>
//               <p >{ showcode}</p>
//           </div>
//       )
 };
