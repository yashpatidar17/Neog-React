import { useContext } from "react";
import { TaskContext } from "../main";
import { Link } from "react-router-dom";

export const Open = () => {
  const { tododata } = useContext(TaskContext);

  const onlynotdonetodo = tododata.filter((item) => !item.isCompleted);
  return (
    <div>
      <h2>This Open Task Page</h2>
      <h3>Total Todos : {onlynotdonetodo.length}</h3>
      {onlynotdonetodo.map((todo) => {
        const { id, title, description, isCompleted } = todo;
        return (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Status : {isCompleted ? "Done" : "Not Done"}</p>
            <Link to={`/todoinfo/${id}`}>Expand Todo</Link>
            <hr></hr>
          </>
        );
      })}
    </div>
  );
};
