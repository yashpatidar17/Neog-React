import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"

export const ForumContext = createContext(); 

export const ForumContextProvider = ({ children })=>{

    const [ forumdata,setForumdata] = useState([]);

    useEffect(()=>{
        (async()=>{
            
        })
    })

    return(
        <div>
            <ForumContext.Provider value={{item:4}}>
                {children}
            </ForumContext.Provider>
        </div>
    )
}