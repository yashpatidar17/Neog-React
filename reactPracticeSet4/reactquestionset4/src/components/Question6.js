import { useState } from "react"
import { Commonbutton } from "../button/Commonbutton"
import { Showbooks } from "./Showbooks"


export const Question6 = ({booklist})=>{

    const[show,setshow]  = useState([]);
    const showAll =()=>{
        setshow(booklist)
    }   
    const showClassic = ()=>{
        setshow(booklist.filter((item)=> item.genre === 'Classic'))
    }
    const showDystopian = ()=>{
        setshow(booklist.filter((item)=> item.genre === 'Dystopian'))
    }
    const showYoungadult = ()=>{
        setshow(booklist.filter((item)=> item.genre === 'Young Adult'))
    }
    
    return(
        <div>
            <h2>Question 6</h2>
            <Showbooks datarec={booklist}/>
            <Commonbutton value={"All Genres"} onclickhandle={showAll}/>
            <Commonbutton value={"Classic"} onclickhandle={showClassic}/>
            <Commonbutton value={"Dystopian"} onclickhandle={showDystopian}/>
            <Commonbutton value={"Young Adult"} onclickhandle={showYoungadult}/>
            <Showbooks datarec={show}/>
        </div>
    )
}