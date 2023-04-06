export const Question6 = ({itemlist}) =>{
    return(
        <div>
            <h2>Question 6</h2>
            {itemlist.map((item)=>{
                if(item.flowers.includes("rose")){
                    return(
                        <p>Price of bouquet with roses :{item.price}</p>
                    )
                }
               return null;
            })}
        </div>
    )
}