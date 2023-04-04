import "./App.css";
import { Question1 } from "./Question1";
import { Question2 } from "./Question2";

function App() {
  return (
    <div className="App">
      <Question1 nameprop={"Yash"} />
      <Question2 productname={"Macbook"} productprice={99990}/>
    </div>
  );
}

export default App;
