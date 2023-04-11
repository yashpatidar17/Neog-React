import { useEffect, useState } from "react"
import { fakeFetch } from "../APIs/Fakefetch2"

export const Question2 = ()=>{
    const [ show,setShow] = useState([])

    const getData = async()=>{
        try{
            const {status,data} = await fakeFetch("https://example.com/api/todos");
            if(status === 200){
                setShow(data.todos)
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <div>
            <h2>Question 2</h2>
            {show.map((item)=>(
                <>
                <h2>{item.title}</h2>
                <ul>
                    {item.todos.map((item)=>(
                        <li>{item}</li>
                    ))}
                </ul>
                <hr/>
                </>
                
            ))}
        </div>
    )
}