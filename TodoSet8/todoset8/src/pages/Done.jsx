import { useContext } from "react";
import { TaskContext } from "../main";
import { Link } from "react-router-dom";

export const Done = () => {
  const { tododata } = useContext(TaskContext);
  const onlydonetodo = tododata.filter((item) => item.isCompleted);
  return (
    <div>
      <h2>This Task Done Page</h2>
      <h3>Total Todos : {onlydonetodo.length}</h3>
      {onlydonetodo.map((todo) => {
        const { id, title, description, isCompleted } = todo;
        return (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Status : {isCompleted ? "Done" : "Not Done"}</p>
            <Link to= {`/todoinfo/${id}`}>Expand Todo</Link>
            <hr></hr>
          </>
        );
      })}
    </div>
  );
};
