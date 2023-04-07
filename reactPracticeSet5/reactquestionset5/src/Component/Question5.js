//import { useEffect, useState } from "react";


export const Question5 = ({apicall, heading, height, width }) => {
 // const [showdata, setshowdata] = useState([]);

  return (
    <div>
      {
        <div>
          <h2>Question 5</h2>

          <ul>
            {apicall.map((item) => (
              <div>
                <img
                  src={item.image}
                  alt="Sample link"
                  height={height}
                  width={width}
                />
                <p>{item.name}</p>
                <p>{item.likes}</p>
                <p>{item.comments}</p>
              </div>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};
