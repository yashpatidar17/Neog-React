import { useState, useEffect } from "react";
import { fakeFetch4 } from "../APIs/Fakefetch4";

export const Question4 = () => {
  const [show, setShow] = useState([]);
  const [company,setCompany] = useState("all")

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await fakeFetch4(
          "https://example.com/api/users"
        );
        if (status === 200) {
          setShow(data);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  });

  const companyhandler = (e)=>{
    setCompany(e.target.value);
  }

  const newData = (company === "all" ? show : show.filter((com)=>(com.company === company)));

  return (
    <div>
      <h2>Question 4</h2>
    <label>Filter By Company : </label>
    <select onChange={companyhandler}>
        <option value ="all">All Companies</option>
        <option value ="ABC Inc">ABC Inc</option>
        <option value ="XYZ Corp">XYZ Corp</option>
        <option value ="ACME Corp">ACME Corp</option>
    </select>
      {/* {show.map((item)=>(
        <p>{item.name}</p>
      ))} */}
      <ul>
      {newData.map(({name,email,website,company})=>(
        <li key ={email}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{website}</p>
        <p>{company}</p>
        </li>
      ))}
      </ul>
      
    </div>
  );
};
