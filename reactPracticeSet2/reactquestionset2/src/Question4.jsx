export const Question4 = ({ productlist }) => {

    
  return (
    <div>
      <h2>Question 4</h2>
      <ol>
        {productlist.map((item) => (
          <li style={{border: item.price>50000 ? "5px solid red":""}} key={item.id}>Name : {item.name} Description :{item.description} Price:{item.price}</li>
        ))}
      </ol>
    </div>
  );
};
