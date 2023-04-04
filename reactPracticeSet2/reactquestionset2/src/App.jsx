import "./App.css";
import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Userprofile } from "./Question3";
import {products} from "./Products";
import { Question4 } from "./Question4";
import { Question5 } from "./Question5";
import {products2} from "./Products2";
import { Question6 } from "./Question6";

const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
}

const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

function App() {
  return (

    <div className="App">
      <Question1 nameprop={"Yash"} />
      <Question2 productname={"Macbook"} productprice={99990}/>
      <Userprofile userdata={userData}/>
      <Question4 productlist={products}/>
      <Question5 productlist={products2}/>
      <Question6 title = {title} content={content}/>

    </div>
  );
}

export default App;
