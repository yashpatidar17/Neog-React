import { useState } from "react"

export const Question6 =({title,content})=>{
    const [show,setshow] = useState(false)
    const showhandler = ()=>{
        if(show === false){
            setshow(true);
        }else{
            setshow(false);
        }
    }
    return(
        <div>
            <h2>Question 6</h2>
            <h1>{title}</h1>
            <button onClick={showhandler}>Know More</button>
            <p style={{display :  show ? 'block' : 'none'}}>{content}</p>
        </div>
    )
}