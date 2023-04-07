import { useState } from "react"
import { todoItems } from "../Data/Todoitem"
import { Showtaskdata } from "./Showtaskdata";
import { Commonbutton } from "../button/Commonbutton";

export const Question4a = ()=>{
    const[show,setshow] = useState(todoItems);

    const markhandler = (id) =>{
        setshow(show.map((todo)=>{
            if(todo.id === id){
                todo.isDone = !todo.isDone;
            }
            return todo;
        }))
    }
    return(
        <>
        <div>
            <h2>Question 4 a</h2>
            <Showtaskdata datarec={todoItems}/>
        </div>

        <div>
            <h2>Question 4 b</h2>
            <ul>
                {todoItems.map((item)=>(
                    <li key={item.id} style={{textDecoration : item.isDone === true ? "line-through":""}}>{item.task}</li>
                ))}
            </ul>
        </div>

        <div>
            <h2>Question 4 c</h2>
            <ul>
                {show.map((item)=>(
                    <div>
                    <li key={item.id} style ={{textDecoration : item.isDone === true ? "line-through":""}}>{item.task}</li>
                    <Commonbutton value={"X"} onclickhandle={()=>markhandler(item.id)}/>
                    </div>
                   
                ))}
                
            </ul>
        </div>
        </>
    )
}


