
import './App.css';
import { Question1 } from './components/Question1';
import { Question2 } from './components/Question2';
import { characters } from './Data/Avengers';

function App() {
  return (
    <div className="App">
      <Question1 itemlist={characters}/>
      <Question2/>
    </div>
  );
}

export default App;
