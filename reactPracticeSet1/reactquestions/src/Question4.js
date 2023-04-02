//const imageLink = 'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'

export const Question4 = ({imagelink,caption})=>{
    return(
        <div>
            <h2>Question 4</h2>
            <img src={imagelink} alt=""/>
            <h2>{caption}</h2>
        </div>
    )
}