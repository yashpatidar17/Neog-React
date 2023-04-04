import { useState } from "react"

export const Question9 =()=>{
    const red = '#EE4B2B'
const blue = '#89CFF0'
const green = '#7FFFD4'
const [showcode,setshowcode] = useState(false)

const showcodehandler1 = () =>{
    setshowcode(!showcode)
}
const showcodehandler2 = () =>{
    setshowcode(!showcode)
}
const showcodehandler3 = () =>{
    setshowcode(!showcode)
}

    return(
        <div>
            <h2>Question 9 </h2>
            <button onClick={showcodehandler1}>Red</button>
            <p style={{display : showcode ? "block":"none"}}>{red}</p>
            <button onClick={showcodehandler2}>Blue</button>
            <p style={{display : showcode ? "block":"none"}}>{blue}</p>
            <button onClick={showcodehandler3}>Green</button>
            <p style={{display : showcode ? "block":"none"}}>{green}</p>
        </div>
    )
}