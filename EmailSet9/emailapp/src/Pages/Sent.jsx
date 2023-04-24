import { useContext } from "react"
import { EmailContext } from "../main"

export const Sent = () =>{
    const {emaildata} = useContext(EmailContext);
    return(
        <div>
            <h3>Sent Emails</h3>
            <ul>
            {emaildata.sentEmails.map((email)=>(
                <li key = {email.id}>{email.subject}</li>
            ))}
            </ul>
          
        </div>
    )
}