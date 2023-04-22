import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { fakeFetch } from "../Data/Api";

export const ForumContext = createContext(); 

export const ForumContextProvider = ({ children })=>{

    const [forumdata,setForumdata] = useState([]);
    //console.log(forumdata,"yes")

    useEffect(()=>{
        (async()=>{
            try{
                const {data} = await fakeFetch("https://example.com/api/questions");
                setForumdata(data.questions);
            }catch(e){
                console.error(e)
            }
        })()
    },[])

    return(
        <div>
            <ForumContext.Provider value={{forumdata}}>
                {children}
            </ForumContext.Provider>
        </div>
    )
}