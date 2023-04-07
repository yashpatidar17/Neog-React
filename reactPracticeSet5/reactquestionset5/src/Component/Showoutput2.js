export const Showoutput2 = ({datareceived})=>{
    return(
        <div>
        <ul>
        {datareceived.map(({name,price,quantity})=>(
            <li>{name}-{price}-{quantity}</li>
))}
        </ul>
        
        </div>
    )
}