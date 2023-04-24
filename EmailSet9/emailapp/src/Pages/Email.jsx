import { useContext } from "react";
import { useParams } from "react-router"
import { EmailContext } from "../main";

export const Email = ()=>{
    const {emailId} = useParams();
    const { emaildata} = useContext(EmailContext)
    console.log(emailId,"email");
    const emailByid = emaildata.emails.find((email)=> email.id.toString() === emailId)
    console.log(emailByid?.id,"part")
    return(
        <div>
            <h2>{emailByid?.subject}</h2>
            <p>From : {emailByid?.sender}</p>
            <p>Message : {emailByid?.message}</p>
        </div>
    )
}