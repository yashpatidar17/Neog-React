export const Question3 = ({itemlist})=>{
    return(

        <div>
            <h2>Question 3</h2>
            {itemlist.reduce((acc,curr)=>(curr.magnitude %2 ===0 ? [...acc,<h1>{curr.name}</h1>]:acc),[])}
        </div>
    )
}