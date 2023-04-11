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
    const [show,setshow] = useState(itemList)

  
    // const showfruits = ()=>{
    //     //setshow(itemList.filter((item)=>item.category === "Fruit"))
    //     setshow(itemList.reduce(
    //         (acc, curr) =>
    //           curr.category === "Fruit"
    //             ? [...acc,curr]: acc,[]))
    // }

    // const showvegetable = ()=>{
    //     //setshow(itemList.filter((item)=>item.category === "Fruit"))
    //     setshow(itemList.reduce(
    //         (acc, curr) =>
    //           curr.category === "Vegetable"
    //             ? [...acc,curr]: acc,[]))
    // }

    const fun = (category) =>{
        setshow(itemList.reduce(
            (acc, curr) =>
              curr.category === category
                ? [...acc,curr]: acc,[]))
    } 

    return(
        <div>
            <h2>Question 3</h2>
            <Commonbutton value={"All"} onclickhandle={()=>setshow(itemList)}/>
            <Commonbutton value={"Fruits"} onclickhandle={()=>fun("Fruit")}/>
            <Commonbutton value={"Vegetable"} onclickhandle={()=>fun("Vegetable")}/>
            <Showdata datarec={show}/>
        </div>
    )
}