import { useState,useEffect } from "react"
import { fakeFetch3 } from "../APIs/Fakefetch3"

export const Question3 =()=>{
    // const[show,setShow] = useState([]);
    // const[year,setYear] = useState(show);
    

    // useEffect(()=>{
    //     (async()=>{
    //         try{
    //             const {status,data} = await fakeFetch3("https://example.com/api/movies")
    //             if(status ===200){
    //                 setShow(data)
    //             }
    //         }catch(e){
    //             console.error(e)
    //         }
    //     })()
    // },[])

     
    // const yearHandler = (e)=>{
    //     setYear(e.target.value === "all" ? show : show.filter((movie)=> movie.year === parseInt(e.target.value)))
    // }

    // return(
    //     <>
    //     <h2>Question 3</h2>
    //     <h2>Movies</h2>
    //     <label>Filter by Year:</label>
    //     <select defaultValue="all" onChange={yearHandler}>
    //         <option value="all">All</option>
    //         <option value="2007">2007</option>
    //         <option value="2008">2008</option>
    //         <option value="2009">2009</option>
    //         <option value="2010">2010</option>
    //     </select>
    //     {year.map((item)=>(
    //         <p key={item.title}>{item.title}</p>
    //     ))}
    //     </>
    // )
    const[show,setShow] = useState([]);
    const[year,setYear] = useState("All");
    

    useEffect(()=>{
        (async()=>{
            try{
                const {status,data} = await fakeFetch3("https://example.com/api/movies")
                if(status ===200){
                    setShow(data)
                }
            }catch(e){
                console.error(e)
            }
        })()
    },[])

     
   const yearHandler = (e)=>{
    setYear(e.target.value)
   }

   const filteredArray = year === "All" ? show : show.filter((item)=>(item.year === parseInt(year)));

    return(
        <>
        <h2>Question 3</h2>
        <h2>Movies</h2>
        <label>Filter by Year:</label>
        <select  onChange={yearHandler}>
            <option value="All">All</option>
            <option value = "2007">2007</option>
            <option value = "2008">2008</option>
            <option value = "2009">2009</option>
            <option value = "2010">2010</option>
        </select>
<ul>
{filteredArray.map((item)=>(
            <li>
                <p>Name : {item.title}</p>
                <p>Year : {item.year}</p>
                <p>Rating : {item.rating}</p>
            </li>
            ))}
</ul>
        
        </>
    )
}