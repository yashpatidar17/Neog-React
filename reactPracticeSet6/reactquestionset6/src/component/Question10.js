import { useState,useEffect } from "react"
import { fakeFetch } from "../APIs/Fakefetch10"

export const Question10 = ()=>{
    const[show,setShow] = useState({})

    useEffect(()=>{
        (async()=>{
            try{
                const {status,data} = await fakeFetch("https://example.com/api/profile")
                if(status===200){
                    setShow(data.profile)
                }
            }catch(e){
                console.error(e)
            }
            
        })()
    },[])

    // const Question10card = ({user})=>{
    //     <>
    //         <h1>{user.name}</h1>
    //     </>
    // }

    const clickhandler = ()=>{
        setShow({...show,followers:show.followers+1})
    }
    return(
        <div>
            <h2>Question 10</h2>
            {/* <Question10card user={show}/> */}

            <h1>{show.name}</h1>
            <p>{show.age}</p>
            <p>{show.gender}</p>
            <p>{show.email}</p>
            <p>{show.occupation}</p>
            <p>{show.followers}</p>
            <p>{show.followedBy}</p>
            <button disabled={show.followers >450} onClick={clickhandler}>Follow {show.name}</button>
        </div>
    )
}