
import './App.css';

import { employees } from './employees';
import { Question1 } from './Question1';
import { Question2 } from './Question2';
import { items } from "./items"
import { Question3 } from './Question3';
import { Question4 } from './Question4';
import {products} from './Productlist';
import { Question5 } from './Question5';
import { Question6 } from './Question6';
import {Question7 } from './Question7';
import { Question8 } from './Question8';
import { Question9 } from './Question9';
import { Question10 } from './Question10';
import { Question11 } from './Question11';

const student = {
  name: 'John Doe',
  english: 90,
  maths: 80,
  computers: 70,
}


const backgroundColor = 'lightgreen'
const color = 'darkgreen'
const borderRadius = '5px'
const padding = '10px'

const imageLink = 'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
const caption = 'Spring Flowers'


function App() {
  return (
    <div className="App">
      <h1>React Practice set 1</h1>
      <Question1 employeeList={employees} employeeHeader={"Employees"}/>
      <Question2 backColor={backgroundColor} color={color} brdradius={borderRadius} padd={padding}/>
      <Question3 itemlist={items} itemHeader={"Stationary"}/>
      <Question4 imagelink={imageLink} caption={caption}/>
      <Question5 productList={products}/>
      <Question6 productList={products}/>
      <Question7 studentList={student}/>
      <Question8/>
      <Question9/>
      <Question10/>
      <Question11/>
    </div>
  );
}

export default App;
