export const Question6 = ({ productList }) => {
  return (
    <div>
      <h2>Question 6</h2>
      {/* {productList.filter(({quantity,sales})=>(sales>quantity))
                        .map(({name,quantity,sales})=>(
                            <li>Name:{name} Quantity:{quantity} Sales:{sales}</li>
                        ))
            } */}
      {productList.reduce((acc,{name,quantity,sales})=>
            (sales>quantity ? [...acc , <li> Name:{name} Quantity:{quantity} Sales:{sales} </li>]:acc),[])
            }
      {/* {productList.reduce((acc, { name, quantity, sales }) => {
        if (sales > quantity) {
          return [
            ...acc,
            <li>
              Name:{name} Quantity:{quantity} Sales:{sales}
            </li>,
          ];
        } else {
          return acc;
        }
      }, [])} */}
    </div>
  );
};
