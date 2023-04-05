import './App.css';
import { Question1 } from './Question1';
import { Question2 } from './Question2';
import { cartoons } from './Cartoon';
import { Question3 } from './Question3';
import { Question4 } from './Question4';
import { Question5 } from './Question5';
import { vegetables } from './Vegetable';
import { Question6 } from './Question6';
import { bouquet } from './Flowers';

const imagelink = "https://picsum.photos/200" 

function App() {
  return (
    <div className="App-header">
     <Question1 imageLink = {imagelink} heightprop={'400 px'} widthprop={'400 px'}/>
     <Question2 itemlist={cartoons}/>
     <Question3 itemlist={cartoons}/>
     <Question4 itemlist={cartoons} superpower = {"Intelligence"}/>
     <Question5 itemlist={vegetables}/>
     <Question6 itemlist={bouquet}/>
    </div>
  );
}

export default App;
