import { useState } from "react"
//import { Commonbutton } from "../button/Commonbutton"

export const Question7 = ()=>{
    const[live,setlive] = useState(3)

   
    const lossalifehandler = ()=>{
        if(live>0){
            setlive(live-1);
        }
        
    }
    return(
        
        <div>
            <h2>Question 7</h2>
            <h1>Current Live : {live}</h1>
            {/* <Commonbutton  value={"Lose a Life"} onclickhandle={lossalifehandler}/> */}
            <button onClick={lossalifehandler} >{"Lose a Life"}</button>
            <p style={{display:live === 0 ? "block":"none"}}>Game Over</p>
        </div>
    )
}