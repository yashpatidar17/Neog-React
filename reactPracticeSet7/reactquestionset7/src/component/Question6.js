import { useEffect, useState } from "react"
import { fakeFetch6 } from "../APIs/Fakefetch6"

export const Question6 = () =>{
    const[data,setData] = useState([]);
    const[genredata,setGenredata] = useState("All");

    useEffect(()=>{
        (async()=>{
            try{
                const {data} = await fakeFetch6("https://example.com/api/movies")
                setData(data)
            }catch(e){
                console.error(e)
            }
        })()
    },[])

    const genreHandler = (e)=>{
        setGenredata(e.target.value)
    }

    const newData = (genredata === "All" ? data : data.filter((movie)=>(movie.genre === genredata)))

    return(
        <div>
            <h2>Question 6</h2>
            <select onChange={genreHandler}>
                <option value = {"All"}>All</option>
                <option value={"Crime"}>Crime</option>
                <option value={"Drama"}>Drama</option>
                <option value={"Action"}>Action</option>
                <option value={"Comedy"}>Comedy</option>
                <option value={"Science Fiction"}>Science Fiction</option>
            </select>
            <ul>
            {newData.map(({title,year,genre})=>(
                <li key={title}>
                    <p>{title}</p>
                    <p>{year}</p>
                    <p>{genre}</p>
                </li>
            ))}
            </ul>
            
        </div>
    )
}