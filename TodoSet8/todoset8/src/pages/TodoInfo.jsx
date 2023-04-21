import { useContext } from "react";
import { useParams } from "react-router";
import { TaskContext } from "../main";

export const TodoInfo = () => {
  const { todoId } = useParams();
  const { tododata } = useContext(TaskContext);

  //console.log(tododata);
  const infotodo = tododata.find((todo) => {
    return todo.id.toString() === todoId;
  });
  //console.log(infotodo);
  return (
    <div>
      <h1>About Todo</h1>
      <h1>
        <strong>Title : </strong>
        {infotodo?.title}
      </h1>
      <h2>{infotodo?.description}</h2>
      <h2>Status : {infotodo?.isCompleted ? "Done" : "Not Done"}</h2>
    </div>
  );
};
