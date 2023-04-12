import {useState,useEffect} from "react"
import {fakeFetch1} from "../APIs/Fakefetch1"

const Question1 = ()=>{

    const [show,setShow] = useState(null)
    const [temp,setTemp] = useState(true)

    useEffect(()=>{
        (async()=>{
            try{
                const {status,data} = await fakeFetch1("https://example.com/api/weather")
                if(status===200){
                    setShow(data);
                }
            }catch(e){
                console.error(e)
            }
        })()
    },[])

    const tempHandler =()=>{
        setTemp(!temp)
    }

    const changeUnit =(arg)=>(temp ? arg : Math.round((arg*1.8)+32)) 

    return(
        <div>
            <h2>Question 1</h2>
                {show ? (<>
                    <p>Temperature :{changeUnit(show.temperature)} {temp ? "C": "F"}</p>
                    <p>Humidity : {show.humidity} %</p>
                    <p>Wind Speed : {show.windSpeed} Km/h</p>
                    <button onClick= {tempHandler} >{temp ? "Conver to F" : "Covert to C"}</button>
                    </>) :
                    (<p>Weather Info Loading</p>)
                    
                }
        </div>
    )
}

export {Question1};