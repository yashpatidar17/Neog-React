export const Question3 = ({itemlist,itemHeader}) =>{
    return(
        <div>
        <h2>Question 3</h2>
        <h1>{itemHeader}</h1>
        <ol>
            {itemlist.map((item)=>(
                <li>
                    {item}
                </li>
            ))}
        </ol>

        </div>
    )
} 