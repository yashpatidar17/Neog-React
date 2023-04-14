import { useState, useEffect } from "react";
import { fakeFetch5 } from "../APIs/Fakefetch5";

export const Question5 = () => {
  const [data, setData] = useState(null);
  // const [show,setShow] = useState(false)

  const getData = async () => {
    try {
      const res = await fakeFetch5();
      setData(res);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const quoteHandler = () => {
    getData();
  };

  // useEffect(()=>{
  //     (async()=>{
  //         try{
  //             const res = await fakeFetch5()
  //             setData(res);
  //             //console.log(setData(res));
  //         }catch(e){
  //             console.error(e)
  //         }
  //     }

  //     )()
  // },[])

  // const quoteHandler = ()=>{

  //     setShow(pre => !pre)
  // }

  return (
    <div>
      <h2>Question 5</h2>
      {data && (
        <>
          {data.content}- {data.author}
        </>
      )}
      <button onClick={quoteHandler}>New Quote</button>
    </div>
  );
};
