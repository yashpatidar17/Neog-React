import { createContext, useEffect, useState } from "react"
import { fakeFetch } from "../data/Api";

export const TaskContext = createContext();

export const TaskContextProvider = ({children}) =>{
    const [tododata,setTodoData] = useState([]);
    //const [donetododata,setDonetododata] = useState(tododata);

    useEffect(()=>{
        (async()=>{
            try{
                const {status,data} = await fakeFetch("https://example.com/api/todos")
                if(status===200){
                    setTodoData(data.todos)
                }
            }catch(e){
                console.error(e)
            }
        })()
    },[])
    return(
        <div>
            <TaskContext.Provider value={{item:4,tododata}}>
            {children}
            </TaskContext.Provider>
        </div>
    )
}