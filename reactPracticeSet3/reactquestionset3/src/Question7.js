export const Question7 = ({itemlist}) =>{
   
    return(
        <div>
            <h2>Question 7</h2>
            <ol>
            {itemlist.filter((item)=>item.price>2000)
                      .map((item)=> (
                         item.flowers.map((flower)=>{
                        return <li >{flower}</li>
                        })
                      ))  }
            </ol>
            
        </div>
    )
}