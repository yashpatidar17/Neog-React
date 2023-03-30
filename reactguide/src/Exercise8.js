export function Exercise8(){

    const fruits = [
        { id: 1, name: "Apple", price: 20 },
        { id: 2, name: "Orange", price: 54 },
        { id: 3, name: "Grapes", price: 30 },
        { id: 4, name: "Pineapple", price: 70 }
      ];
    return(
        <>
        <ul>
            {
                fruits.map((item)=>(
                    <li key={item.id}>
                    {item.name} :INR {item.price}
                    </li>
                ))
            }
        </ul>
        <p>----------------------------------------------------------------------------------------------</p>
        </>
    )
}