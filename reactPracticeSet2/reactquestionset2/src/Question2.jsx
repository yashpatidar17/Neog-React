export const Question2 = ({productname,productprice})=>{
    return(
        <div>
            <h2>Question 2</h2>
            <p >Product Name : <span style ={{color: 'blue',fontWeight: 'bold'}}>{productname}</span></p>
            <p>Product Price : <span style={{color: 'green',fontStyle: 'italic'}}>{productprice}</span></p>
        </div>
    )
}