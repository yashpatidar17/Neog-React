import { useEffect, useState } from "react";
import { fakeFetch } from "../Api/Fakefetch4";

export const Question4 = ({ heading, height, width }) => {
  const [showdata, setshowdata] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch("https://example.com/api/user");
      if (status === 200) {
        setshowdata(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Question 4</h2>
      <div>
        <h2>{heading}</h2>
        <img
          src={showdata.image}
          alt="Sample link"
          height={height}
          width={width}
        />
        <p>Name : {showdata.name}</p>
        <p>Likes : {showdata.likes}</p>
        <p>Comments: {showdata.comments}</p>
        
      </div>
    </div>
  );
};
