import { fakeFetch } from "../APIs/Fakefetch1"
import {useEffect, useState} from "react"
import { Button } from "./Button"

export const Question1 = ()=>{
    const [show,setShow] = useState([])
    const [data,setData] = useState(null)

    const clickHandler = (val)=>{
        setData(val)
    }

    const getData = async ()=>{
        try{
            const {status,data} = await fakeFetch("https://example.com/api/products");
            if(status ===200){
                setShow(data.products)
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
            <h2>Question 1</h2>
            {show.map((item)=>(
                <Button value= {`Show ${item.name}`} click={()=>clickHandler(item)}/>
            ))}

            {data   &&  (
                <>
                    <p>Name : {data.name}</p>
                </>
            ) }
        </div>
        
    )

    // return (
    //     <div>
    //       <h2>Question 1</h2>
    //       {show.map((item) => (
    //         <Button value={`Show ${item.name}`} click={() => clickHandler(item)} />
    //       ))}
    //       {data.length > 0 && ( // check if data has length greater than 0 before rendering
    //         <>
    //           <p>Name : {data.name}</p>
    //         </>
    //       )}
    //     </div>
    //   )
}