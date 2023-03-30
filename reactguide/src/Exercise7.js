export function Exercise7({product}){
    const {name,price,specification,warranty} = product;
    return(
        <>
        <h1>{name}</h1>
        <h2>using props</h2>
        <p>Price : {price}</p>
        <p>Specification : {specification}</p>
        <p>Warranty : {warranty}</p>
        <p>---------------------------------------------------------------------------------------------</p>
        </>
    )
}