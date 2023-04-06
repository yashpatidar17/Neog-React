
import './App.css';
import { Question1 } from './components/Question1';
import { characters } from './Data/Avengers';

function App() {
  return (
    <div className="App">
      <Question1 itemlist={characters}/>
    </div>
  );
}

export default App;
