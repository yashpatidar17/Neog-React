import './App.css';
import { Exercise1 } from './Exercise1';
import { Exercise2 } from './Exercise2';
import { Exercise3 } from './Exercise3';
import { Exercise4 } from './Exercise4';
import { Exercise5 } from './Exercise5';
import { Exercise6 } from './Exercise6';
import {productDetails} from './ProductDetails';
import { Exercise7 } from './Exercise7';
import {Exercise8 } from './Exercise8';
import {Exercise9} from './Exercise9';
import { fruits } from './fruits';
import { Exercise10 } from './Exercise10';
import { Exercise11 } from './Exercise11';
import { Exercise12 } from './Exercise12';
import { Exercise13 } from './Exercise13';
import { Exercise14 } from './Exercise14';

function App() {
  return (
    <div className="App">
      <Exercise1/>
      <Exercise2/>
      <Exercise3/>
      <Exercise4/>
      <Exercise5 firstNum={4} secondNum={5}/>
      <Exercise6/>
      <Exercise7 product = {productDetails}/>
      <Exercise8/>
      <Exercise9 productlist={fruits} productheader={"Fruits"}/>
      <Exercise10 employeeheader={"Employee List"}/>
      <Exercise11 productheader={"Food Item"}/>
      <Exercise12/>
      <Exercise13/>
      <Exercise14/>
    </div>
  );
}

export default App;
