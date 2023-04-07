
import './App.css';
//import { Question1 } from './components/Question1';
import { Question2 } from './components/Question2';
import { Question3 } from './components/Question3';
import { Question4a } from './components/Question4';
import { characters } from './Data/Avengers';
import { Question5 } from './components/Question5';
import {todoItems} from './Data/Tasks';
import { Question1op } from './components/Question1op';
import { Question3op } from './components/Question3op';
import { Q4 } from './components/Q4';
import { Question6 } from './components/Question6';
import { books } from './Data/Books';

function App() {
  return (
    <div className="App">
      {/* <Question1 itemlist={characters}/> */}
      <Question1op itemlist={characters}/>
      <Question2/>
      <Question3/>
      <Question3op/>
      <Question4a/>
      <Q4/>
      <Question5 itemlist = {todoItems}/>
      <Question6 booklist={books}/>
    </div>
  );
}

export default App;
