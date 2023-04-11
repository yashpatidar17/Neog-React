import { useEffect, useState } from "react"
import { fakeFetch } from "../APIs/Fakefetch7"

export const Question7 = ()=>{
    const [data,setData] = useState([])
    const [show,setShow] = useState(null)

    useEffect(()=>{
        (async()=>{
            try{
                const {data,status} = await fakeFetch("https://example.com/api/projects")
                if(status ===200){
                    setData(data.projects)
                }
                
            }catch(e){
                console.error(e)
            }
        })()
    },[])

    const clickhandler = (item)=>{
        setShow(item)
    }

    return(
        <div>
            <h2>Question 7 </h2>
            {data.map((project)=> (
                <>
                <p><b>Name : </b>{project.title}</p>
                <p><b>Description : </b>{project.description}</p>
                <button onClick={()=>clickhandler(project)}>Show Details</button>
                </>
               
            ))}
            
                {show !== null   && (
                    
                        <>
                <p><b>Name : </b>{show.title}</p>
                <p><b>Description : </b>{show.description}</p>
                <p><b>Technologies :</b>{show.technologies}</p>
                <p><b>Completed :</b>{show.completed ? "true":"false"}</p>
                </>
                    
                    
                )}
        </div>
    )
}