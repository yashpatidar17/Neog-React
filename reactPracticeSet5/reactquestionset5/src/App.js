import './App.css';
import { useEffect, useState } from "react";
import { Question1 } from './Component/Question1';
import { Question2 } from './Component/Question2';
import { Question3 } from './Component/Question3';
import { Question4 } from './Component/Question4';
import { Question5 } from './Component/Question5';
import { fakeFetch5 } from './Api/Fakefetch5';



function App() {

  const [showdata, setshowdata] = useState([]);
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch5("https://example.com/api/users");
      if (status === 200) {
        setshowdata(data);
      }
    } catch (e) {
      console.error(e);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">
    <Question1/>
    <Question2/>
    <Question3/>
    <Question4 heading={"User Profile"} height={400} width={400}/>
    {showdata.length ===0 ? <p>Loading...</p>:<Question5 apicall = { showdata} heading={"User Profile"} height={200} width={200}/>}
    </div>
  );
}

export default App;
