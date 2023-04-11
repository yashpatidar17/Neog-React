import { useEffect, useState } from "react"
import { fakeFetch } from "../APIs/Fakefetch6";

export const  Question6 = () =>{
    const [data,setData] = useState([]);
    const [showarc,setShowarc] = useState(false)

    useEffect(()=>{
        (async()=>{
            try{
                const {status,data} = await  fakeFetch("https://example.com/api/habits")
                if(status ===200){
                    setData(data.habits)
                }
            }catch(e){
                console.error(e)
            }
        })()
    },[])

    const clickhandler = ()=>{
        setShowarc(!showarc) 
    }
    
    const filtered = data.filter((e)=>e.archived === showarc)

    return(
        <div>
            <h2>Question 6</h2>
            {data.length >0 && (<h2>{showarc ? "Archived" : "Unarchived"}</h2>)}
            {filtered.map((item)=>(
                <>
                <p><b>{item.title}</b></p>
                <p>{item.desc}</p>
                <p><b>Days Followed: </b>{item.daysFollowed}</p>
                <p><b>Days Skipped: </b>{item.daysSkipped}</p>
                </>
            ))}

            {data.length >0 && (<button onClick={()=>clickhandler()}>{showarc ? "Show unArchived":"show archived"}</button>)}
        </div>
    )
}