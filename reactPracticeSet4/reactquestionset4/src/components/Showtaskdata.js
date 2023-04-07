export const Showtaskdata = ({datarec})=>{
    return(
        <div>
            <ul>
                {datarec.map((item)=>(
                    <li>{item.task}</li>
                ))}
            </ul>
        </div>
    )
}