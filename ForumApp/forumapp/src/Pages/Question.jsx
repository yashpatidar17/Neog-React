import { useContext } from "react"
import { ForumContext } from "../main"
import { Link } from "react-router-dom"

export const Question = () =>{
    const {forumdata} = useContext(ForumContext)
    //console.log(forumdata,"no")
    return(
        <div>
            <h2>Question Page</h2>
            {forumdata.map((item)=>(
                <div key = {item?.id}>
                <h3 >{item?.question}</h3>
                <Link>Upvote </Link>
                <Link>Downvote </Link>
                <Link to = {`/answer/${item?.id}`}>Answer</Link>
                </div>
                
            ))}
        </div>
    )
}