export const Question6 = ({itemlist}) =>{
    return(
        <div>
            <h2>Question 6</h2>
            {itemlist.map((item)=>{
                if(item.flowers.includes("rose")){
                    return(
                        <p>{item.price}</p>
                    )
                }
               return null;
            })}
        </div>
    )
}