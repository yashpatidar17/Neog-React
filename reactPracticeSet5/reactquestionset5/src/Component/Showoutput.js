export const Showoutput = ({datareceived})=>{
    return(
        <div>
        {datareceived.map((item)=>(
            <p style={{color: item.status === "Offline" ? "red":"green"}}>{item.name} - {item.status}</p>
        ))}
        </div>
    )
}