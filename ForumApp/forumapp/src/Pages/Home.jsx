import { Link } from "react-router-dom"

export const Home = () =>{
    return(
        <div>
            <h2>Welcome John</h2>
            <Link to ="/question">Show Question List</Link>
        </div>
    )
}