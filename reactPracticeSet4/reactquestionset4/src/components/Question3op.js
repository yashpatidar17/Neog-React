import { useState } from "react";
import { Commonbutton } from "../button/Commonbutton";
import { Showdata } from "./Showdata";

const itemList = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
  ];


export const Question3op = ()=>{
    const [show,setshow] = useState([])

    const showall = ()=>{
        setshow(itemList)
    }

    const showfruits = ()=>{
        //setshow(itemList.filter((item)=>item.category === "Fruit"))
        setshow(itemList.reduce(
            (acc, curr) =>
              curr.category === "Fruit"
                ? [...acc,curr]: acc,[]))
    }

    const showvegetable = ()=>{
        //setshow(itemList.filter((item)=>item.category === "Fruit"))
        setshow(itemList.reduce(
            (acc, curr) =>
              curr.category === "Vegetable"
                ? [...acc,curr]: acc,[]))
    }

    return(
        <div>
            <h2>Question 3</h2>
            <Commonbutton value={"All"} onclickhandle={showall}/>
            <Commonbutton value={"Fruits"} onclickhandle={showfruits}/>
            <Commonbutton value={"Vegetable"} onclickhandle={showvegetable}/>
            <Showdata datarec={show}/>
        </div>
    )
}