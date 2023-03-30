export function Exercise5({firstNum,secondNum}){
    return(
        <>
            <h1>Sum of Numbers Dynamically</h1>
            <p>Passing the Props</p>
            <>
                <p>First Number: {firstNum}</p>
                <p>Second Number: {secondNum}</p>
                <p>Sum: {firstNum+secondNum}</p>
                <p>------------------------------------------------------------------------------------------</p>
            </>
        </>
    )
}