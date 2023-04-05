export const Question4 = ({itemlist,superpower})=>{
    return(
        <div>
            <h2>Question 4</h2>
            <ul>
            {itemlist.reduce((acc,curr)=>
            ((curr.superpower === superpower) ? [...acc,<li>{curr.name} {curr.superpower} {curr.magnitude}</li>]:acc),[])}
            </ul>
           
        </div>
    )
}