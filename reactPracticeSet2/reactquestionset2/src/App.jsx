import "./App.css";
import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Userprofile } from "./Question3";
import {products} from "./Products";
import { Question4 } from "./Question4";
import { Question5 } from "./Question5";
import {products2} from "./Products2";
import { Question6 } from "./Question6";
import { Question7 } from "./Question7";
import { Question8 } from "./Question8";
import { gadgets } from "./Gadgets";

const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
}

const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

const heading = 'About Me'
const name = 'Yash' // you can put your name
const learning = 'I am learning React JS currently at neoG Camp.'

function App() {
  return (

    <div className="App">
      <Question1 nameprop={"Yash"} />
      <Question2 productname={"Macbook"} productprice={99990}/>
      <Userprofile userdata={userData}/>
      <Question4 productlist={products}/>
      <Question5 productlist={products2}/>
      <Question6 title = {title} content={content}/>
      <Question7 heading={heading} name={name} learning={learning}/>
      <Question8  productlist = {gadgets}/>
    </div>
  );
}

export default App;
