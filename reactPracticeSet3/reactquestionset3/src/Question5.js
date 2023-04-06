import { useState } from 'react';

export const Question5 = ({itemlist}) => {

    const [highlight,sethighlight] = useState(false)

    const clickhandler = () =>{
        sethighlight(!highlight)
    }
    return(
        <div>
            <h2>Question 5</h2>
            <ol>
                {itemlist.map((item)=>(
                    <li style = {{color : highlight && item.pickDate === "2023-03-30" ? "red":""}} key ={item.id}>Name: {item.name} Pickup Date :{item.pickDate}</li>
                ))}
            </ol>
            <button onClick={clickhandler}>Highlight Fresh Vegetables</button>
        </div>
    )
}