export function Exercise6(){
    const product = {
        id: "AC1023",
        name: "Air Conditioner",
        price: 29600,
        specification: "1 Ton, 4 Star Rating",
        warranty: "5 Years Compressor Warranty"
    };
    return(
        <>
        <h1>{product.name}</h1>
        <p>Price: INR {product.price}</p>
        <p>Specification: {product.specification}</p>
        <p>Warranty: {product.warranty}</p>
        <p>------------------------------------------------------------------------------------------</p>
        </>
    )
}