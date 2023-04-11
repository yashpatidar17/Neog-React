import { useEffect, useState } from "react";
import { fakeFetch } from "../APIs/Fakefetch5";
import { Question5card } from "./Question5card";

export const Question5 = ()=>{
    const [data,setData] = useState([])
   // const [show,setShow] = useState(data)

    const getData = async ()=>{
        try{
            const {data,status} = await fakeFetch("https://example.com/api/posts")
            if(status === 200){
                setData(data.posts)
            }
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        getData();
    },[])
    
    const bakeryhandler = ()=>{
        setData(data.reduce((acc,curr)=>(curr.category === "Bakery") ? [...acc,curr] : acc,[]))
    }
    

    return(
        <div>
            <h2>Question 5</h2>
            {data.map((post)=>(
                <Question5card datarec={post}/>
            ))}

            {data.length>0 && (
                <button onClick={bakeryhandler}>Show Bakery</button>
            )}
            
        </div>
    )
}