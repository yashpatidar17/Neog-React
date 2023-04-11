import { useState,useEffect } from "react"
import { fakeFetch } from "../APIs/Fakefetch9"

export const Question9 =()=>{
    const [ data,setData] = useState({})
    const [newdata,setNewdata] = useState("")

    useEffect(()=>{
        (async() =>{
            try{
                const {status,data} = await fakeFetch("https://example.com/api/getvideo")
                if(status ===200){
                    setData(data.videos)
                }
            }catch(e){
                console.error(e)
            }
        })()
    },[])

    const changehandler = (e)=>{
        setNewdata(e.target.value)
        console.log(e.target.value)
    }

    const clickhandler = ()=>{
        setData({...data, lable: newdata})
        console.log(data)
    }

    return(
        <div>
            <h2>Question 9 </h2>
            <>
                <img src={data.thumbnail} alt="sample"/>
                <p><b>{data.title}</b></p>
                <p><b>Likes: </b> {data.likes}</p>
                <p><b>Views: </b> {data.views}</p>
                {newdata.length>0 && (<p><b>Lable: </b>{data.lable}</p>)}
                <input onChange={changehandler}/>
                <button onClick={clickhandler}>Add Label</button>
            </>
        </div>
    )
}