import { useState } from "react";
import { Commonbutton } from "../button/Commonbutton";
import { Showdata } from "./Showdata";


export const Question1op = ({itemlist})=>{
    const {heroes,villains} = itemlist;
    const [show,setshow] = useState([])

    const showhero = ()=>{
        setshow(heroes)
    }

    const showvillan = ()=>{
        setshow(villains)
    }

    return(
        <div>
        <Commonbutton value ={"show Hero"} onclickhandle = {showhero}/>
        <Commonbutton value = {"Show Villan"} onclickhandle = {showvillan}/>
        <Showdata datarec={show}/>
        </div>        
    )
}