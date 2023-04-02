// Create a React component called Greeting that receives a name prop and displays a message like
//  "Hello, name!" on the DOM.


export const Question1 = ({nameprop}) =>{
    return(
        <div>
            <h2>Question 1</h2>
            <p>Hello,{nameprop}</p>
        </div>
    )
}