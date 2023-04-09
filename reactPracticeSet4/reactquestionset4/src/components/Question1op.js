import { useState } from "react";
import { Commonbutton } from "../button/Commonbutton";
import { Showdata } from "./Showdata";


export const Question1op = ({itemlist})=>{
    const {heroes,villains} = itemlist;
    const [show,setshow] = useState({
        heading:"",
        herovillan:[]
    })

    const showhero = ()=>{
        setshow({heading:"Hero",
                herovillan:heroes})
    }

    const showvillan = ()=>{
        setshow({heading:"Villan",
                herovillan:villains})
    }

    return(
        <div>
        
        <Commonbutton value ={"show Hero"} onclickhandle = {showhero}/>
        <Commonbutton value = {"Show Villan"} onclickhandle = {showvillan}/>
        <h2>{show.heading}</h2>
        <Showdata datarec={show.herovillan}/>
        </div>        
    )
}