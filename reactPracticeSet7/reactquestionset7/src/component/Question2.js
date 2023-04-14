import { useState, useEffect } from "react";
import { fakeFetch2 } from "../APIs/Fakefetch2";

export const Question2 = () => {
  //     const [userData, setUserData] = useState({});
  //   const [showAddress, setShowAddress] = useState(false);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fakeFetch2("https://example.com/api/user");
  //         setUserData(response.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  //   const toggleAddress = () => {
  //     setShowAddress(!showAddress);
  //   };

  //   return (
  //     <div>
  //       <h2>User Data</h2>
  //       <p>Name: {userData.name}</p>
  //       <p>Email: {userData.email}</p>
  //       <p>Phone: {userData.phone}</p>
  //       <button onClick={toggleAddress}>
  //         {showAddress ? "Hide Address" : "Show Address"}
  //       </button>
  //       {showAddress && (
  //         <div>
  //           <p>Street: {userData.address.street}</p>
  //           <p>Suite: {userData.address.suite}</p>
  //           <p>City: {userData.address.city}</p>
  //           <p>Zipcode: {userData.address.zipcode}</p>
  //         </div>
  //       )}
  //     </div>
  //   );

  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await fakeFetch2(
          "https://example.com/api/user"
        );
        if (status === 200) {
          setData(data);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const showHandler = () => {
    setShow((pre) => !pre);
  };

  return (
    <div>
      <h2>Question 2</h2>
      <p>Name : {data.name}</p>
      <p>Email : {data.email}</p>
      <p>Phone : {data.phone}</p>

      <button onClick={showHandler}>
        {show ? "Hide Address" : "Show Address"}
      </button>
      {show && (
        <>
          <p>Street: {data.address.street}</p>
          <p>Suite: {data.address.suite}</p>
          <p>City: {data.address.city}</p>
          <p>Zipcode: {data.address.zipcode}</p>
          {/* <p>{Object.keys(data.address).map((item)=>(
                <p>{data?.address[item]}</p>
            ))}</p>*/}
        </>
      )}
    </div>
  );
};
