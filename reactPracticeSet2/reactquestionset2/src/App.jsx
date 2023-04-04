import "./App.css";
import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Userprofile } from "./Question3";
import {products} from "./Products";
import { Question4 } from "./Question4";

const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
}
function App() {
  return (
    
    <div className="App">
      <Question1 nameprop={"Yash"} />
      <Question2 productname={"Macbook"} productprice={99990}/>
      <Userprofile userdata={userData}/>
      <Question4 productlist={products}/>

    </div>
  );
}

export default App;
