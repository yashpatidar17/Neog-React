// import { useState } from "react"

export const Question10 =({itemlist,header}) =>{
    // const [done,setdone] = useState(false)

    return(
        <div>
            <h2>Question 10</h2>
            <h2>{header}</h2>
            {itemlist.map((item)=>(
                <div style={{color : item.isCompleted ? "green":"red"}}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}