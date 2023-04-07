
import { useState } from "react"
import { Commonbutton } from "../button/Commonbutton";

const todoItems = [
    {id: 1, task: "Writing 1-page poem", isDone: false},
    {id: 2, task: "Gym", isDone: false},
    {id: 3, task: "Shopping", isDone: false},
    {id: 4, task: "Standup call", isDone: false},
  ]

export const Q4 = () =>{
    const[show,setshow] = useState(todoItems);

    const displaynonehandler = (id)=>{
        setshow(todoItems.map((item)=>{
            if(item.id === id){
                item.isDone = !item.isDone;
            }
            return item
        }))
    }

    return(
        <div>
            <h2>Q4</h2>
            <ul>
                {show.map((item)=>(
                    <div  style ={{display : item.isDone === false ? "block":"none"}}>
                    <li key={item.id}>{item.task}</li>
                    <Commonbutton value={"X"} onclickhandle={()=>displaynonehandler(item.id)}/>
                    </div>
                   
                ))}
                
            </ul>
        </div>
    )
}