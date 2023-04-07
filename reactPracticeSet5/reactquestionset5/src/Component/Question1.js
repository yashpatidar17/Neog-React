import { fakeFetch } from "../Api/Fakefetch1"
import {useEffect, useState } from "react";
import { Showoutput } from "./Showoutput";

export const Question1 = ()=>{
    const[showdata,setshowdata] = useState([])

    const getData = async () =>{
        try{
            const {status,data} = await fakeFetch("https://example.com/api/users/status")
            if(status === 200){
                setshowdata(data.users)
            }
        }catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        getData();
    },[])


    return(
        <div>
            <h2>Question 1</h2>
            <Showoutput datareceived={showdata}/>
        </div>
    )
}