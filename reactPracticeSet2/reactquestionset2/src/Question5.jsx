export const Question5 = ({ productlist })=>{
    return(
        <div>
        <h2>Question 5</h2>
        <ul>
          {productlist.filter((item) => (item.name === "mobile"))
                        .map((item) =>(
                            <li>Name : {item.name} Description :{item.description} Price:{item.price}</li>
                        ))}
        </ul>
      </div>
    )
}