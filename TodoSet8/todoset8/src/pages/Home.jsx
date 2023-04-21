//import { Routes,Route } from "react-router"

import { useContext } from "react";
import { TaskContext } from "../main";

export const Home = () => {
  const { tododata, todomarkHandler } = useContext(TaskContext);

  return (
    <div>
      <h2>This is Home Page</h2>
      {tododata.map((todo) => {
        const { title, description, isCompleted } = todo;
        return (
          <>
            <div style={{textDecoration: isCompleted ?"line-through":""}}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>

            <p>Status : {isCompleted ? "Done" : "Not Done"}</p>
            <button onClick={() => todomarkHandler(todo)}>
              {isCompleted ? "Mark as Not Done" : "Mark as Done"}
            </button>
            <hr></hr>
          </>
        );
      })}
      {/* <p>show {item}</p> */}
    </div>
  );
};
