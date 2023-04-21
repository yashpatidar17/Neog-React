import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/Api";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tododata, setTodoData] = useState([]);
  //const [donetododata,setDonetododata] = useState(tododata);

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await fakeFetch(
          "https://example.com/api/todos"
        );
        if (status === 200) {
          setTodoData(data.todos);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const todomarkHandler = (itemSelect) => {
    //console.log(itemSelect);
    // setTodoData((prev) =>
    //   prev.map((item) =>
    //     item.id === itemSelect.id ? { ...item, isCompleted: !item.isCompleted } : item
    //   )
    // )
    setTodoData((prev)=>prev.reduce((acc,curr)=>{
        if(curr.id === itemSelect.id) {
            return [...acc,{...curr,isCompleted: !curr.isCompleted}]
        }else{
            return [...acc,curr]
        }
    },[]))


};
  

  return (
    <div>
      <TaskContext.Provider value={{ item: 4, tododata, todomarkHandler }}>
        {children}
      </TaskContext.Provider>
    </div>
  );
};
