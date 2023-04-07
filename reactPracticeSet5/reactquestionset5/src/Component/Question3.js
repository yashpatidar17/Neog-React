import {useEffect, useState } from "react";
import { fakeFetch } from "../Api/Fakefetch2";
import { Showoutput2 } from "./Showoutput2";


export const Question3 = ()=>{
    const [ showdata,setshowdata] = useState([])

    const getData = async() =>{
        try{
            const {status,data} = await fakeFetch("https://example.com/api/products");
            if(status === 200){
                setshowdata(data.products)
            }
        }catch(e){
            console.error(e)
        }
    }

    const filterhandler = ()=>{
        setshowdata(showdata.filter((item)=>(item.price>100)))
    }

    useEffect(()=>{
        getData();
    },[])


    return(
        <div>
            <h2>Question 3</h2>
            <button onClick={filterhandler}>price more than 100</button>
            <Showoutput2 datareceived={showdata}/>
        </div>
    )
}