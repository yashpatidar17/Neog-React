export const Question1 = ({imageLink,heightprop,widthprop}) =>{
    //const imagedimention = {height:{heightprop} ,width:{widthprop}}
    return(
        <div>
            <h2>Question 1</h2>
            <img 
            src={imageLink} alt="Sample link"
            height = {heightprop}
            width = {widthprop}
            
            />
        </div>
    )
}