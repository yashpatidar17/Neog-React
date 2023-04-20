//import { Routes,Route } from "react-router"

import { useContext } from "react"
import { TaskContext } from "../main"

export const Home = () =>{
    const {tododata} = useContext(TaskContext)

    return(
        <div>
            <h2>This is Home Page</h2>
            {tododata.map((todo)=>{
                const {id,title,description,isCompleted} = todo
                return(
                    <>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Status : {isCompleted ? "Done" : "Not Done" }</p>
                <hr></hr>
                </>
                
                )
                
            })}
            {/* <p>show {item}</p> */}
        </div>
    )
}