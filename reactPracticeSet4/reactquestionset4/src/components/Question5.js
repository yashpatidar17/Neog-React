import { useState } from "react"

export const Question5 = ({itemlist}) =>{
    const [mark,setmark] = useState(itemlist)

    const onclickhandler = (id)=>{
        setmark(
            mark.map((item) =>{
              if(item.id === id){
                item.isDone = !item.isDone;
              }
              return item
              }
            )
          );
    }

    return(
        <div>
            <h2>Question 5</h2>
            {mark.map((item)=>(
                <div key={item.id} >
                <p  style={{textDecoration: item.isDone ? 'line-through':''}}>{item.task}</p>
                <button onClick={ () =>onclickhandler(item.id)}>Mark as Done</button>
                </div>
            ))}
        </div>
    )
}