import './App.css';
import { Question1 } from './Question1';
import { Question2 } from './Question2';
import { cartoons } from './Cartoon';


const imagelink = "https://picsum.photos/200" 

function App() {
  return (
    <div className="App-header">
     <Question1 imageLink = {imagelink} heightprop={'400 px'} widthprop={'400 px'}/>
     <Question2 itemlist={cartoons}/>
    </div>
  );
}

export default App;
