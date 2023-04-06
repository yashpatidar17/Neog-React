import { useState } from "react"

export const Question2 = ()=>{

    const [change,setchange] = useState(26);

    const incrementfont = ()=>{
        setchange((change)=> change+1)
    }

    const decrementfont = ()=>{
        setchange((change)=> change-1)
    }

    const resetfont = ()=>{
        setchange((change)=> change=26)
    }


    return (
        <div>
            <h2>Question 2</h2>
            <h2 style = {{fontSize: change}}>Welcome</h2>
            <button style={{padding : "10px" ,margin: "10px"}} onClick={incrementfont}>+</button>
            <button style={{padding : "10px" , margin: "10px"}} onClick={decrementfont}>-</button>
            <button style={{padding : "10px",margin: "10px"}} onClick={resetfont}>reset</button>
        </div>
    )
}