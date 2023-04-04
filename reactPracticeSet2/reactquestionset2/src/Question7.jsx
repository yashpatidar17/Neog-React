import { useState } from "react"

export const Question7 =({heading,name,learning})=>{
    const [show,setshow] = useState(false)
    const showhandler = ()=>{
        setshow(!show);
    }

    return(
        <div>
            <h2>Question 7</h2>
            <h1>{heading}</h1>
            <h2>{name}</h2>
            <button onClick={showhandler}>Know More</button>
            <p style={{display : show ? "block":"none"}}>{learning}</p>
        </div>
    )
}