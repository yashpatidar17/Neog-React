import { mycart } from "./mycart";

  export const Exercise11 =({productheader})=>{
    return(
        <div>
        <h1>{productheader}</h1>
        <ol>
        {mycart.map(({id,name,price})=>(
            <li key={id}>
            {name} : Rs. {price}
            </li>
        ))}
        </ol>
        <p>Total Price: {mycart.reduce((acc,{price})=> (acc+price),0)}</p>
        <p>----------------------------------------------------------------------------------------------</p>
        </div>
    )
  }