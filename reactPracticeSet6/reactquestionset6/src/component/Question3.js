import { useEffect, useState } from "react";
import { fakeFetch } from "../APIs/Fakefetch3";

export const Question3 = () => {
  const [show, setShow] = useState([]);

  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/habits"
      );
      if (status === 200) {
        setShow(data.habits);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Question 3</h2>
      <ul>
      {show.map(({title,desc,daysFollowed,daysSkipped}) => (
        <li>
            <h3>{title}:</h3>
            <p>{desc}</p>

            <p>Days Followed : {daysFollowed}</p>
            <p>Days Skipped : {daysSkipped}</p>
        </li>
      ))}
      </ul>
      
    </div>
  );
};
