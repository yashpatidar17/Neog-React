import './App.css';
import { Question1 } from './Question1';



const imagelink = "https://picsum.photos/200" 

function App() {
  return (
    <div className="App-header">
     <Question1 imageLink = {imagelink} heightprop={'400 px'} widthprop={'400 px'}/>
    </div>
  );
}

export default App;
