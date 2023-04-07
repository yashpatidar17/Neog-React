export const Showdata = ({datarec})=>{
    return(
        <div>
            <ul>
            {datarec.map((item)=>(
                <li style ={{color:item.category ==="Fruit" ? "red":"green"}}key = {item.name}>{item.name}</li>
            ))}
        </ul>
        </div>
        
    )
}