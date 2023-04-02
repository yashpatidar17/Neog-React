export const Question5 = ({productList}) =>{
    return(
        <div>
            <h2>Question 5</h2>
            <h1>Product Name</h1>
            <ul>
                {productList.map((item)=>(
                    <li>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}