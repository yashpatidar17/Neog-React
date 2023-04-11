import { useState, useEffect } from "react";
import { fakeFetch } from "../APIs/Fakefetch8";


export const Question8 = () => {
  const [data, setData] = useState(null);
  const [newdata,setNewdata] = useState("")

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await fakeFetch(
          "https://example.com/api/profile"
        );
        if (status === 200) {
          setData(data.profiles);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  },[]);

  const clickHandler = ()=>{
    setData({...data,name:newdata})
  }

// const clickHandler = async()=>{
//     try{
//         const res = await fakeFetch("https://example.com/api/profile")
//         setData({...data,name:"emily"})
//     }catch(e){
//         console.error(e);
//     }
// }

const changehandler = (e)=>{
    setNewdata(e.target.value)
}

  return (
    <div>
      <h2>Question 8</h2>
      {data !== null && (
        <>
          <h1>Profiles</h1>
          <p>Name : {data.name}</p>
          <p>Email : {data.email}</p>
          <p>Age : {data.age}</p>
          <p>Gender : {data.gender}</p>
          <p>Occupation : {data.occupation}</p>
          <input onChange={changehandler}/>
          <button onClick={clickHandler}>Update Name</button>
        </>
        
      )}
    </div>
  );
};
