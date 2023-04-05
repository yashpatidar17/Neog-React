export const  Question2 =({itemlist})=>{
    return(
        <div>
            <h2>Question 2</h2>
            <ul>
            {itemlist.reduce((acc,curr)=>
            (curr.magnitude>5 ? [...acc,<li key ={curr.id}>Name :{curr.name} Superpower:{curr.superpower} </li>] : acc )
            ,[])}
            </ul>
        </div>
    )
}