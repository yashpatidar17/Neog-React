import {useEffect, useState } from "react";
import { fakeFetch } from "../Api/Fakefetch2";
import { Showoutput2 } from "./Showoutput2";

export const Question2 = ()=>{
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

    const showhandlermore = ()=>{
        const newData = showdata.filter((product) => product.quantity > 20);
        setshowdata(newData);
    }
    const showhandlerless = ()=>{
        const newData = showdata.filter((product) => product.quantity <= 20);
  setshowdata(newData);
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <div>
            <h2>Question 2</h2>
            <h2>Products</h2>
            <button onClick={showhandlermore}>Show products with quantity more than 20</button>
            <button onClick={showhandlerless}>Show products with quantity less than 20</button>
            <Showoutput2 datareceived={showdata}/>
        </div>
    )
}