import { Excercise9Card } from "./Excercise9Card";

const isred = (price)=>{
    if(price>50){
        return "red";
    }
    return "black";
}

export const Exercise9 = ({productheader,productlist})=>{
    return(
        <div>
        <h1>{productheader}</h1>
        <ul>
            {productlist.map(({id,name,price})=>(
                <div style={{ color: isred(price) }}>
                    <Excercise9Card id={id} name={name} price={price}/>
                </div>
            ))}
        </ul>
        <p>--------------------------------------------------------------------------------------------</p>
        </div>
    )
}