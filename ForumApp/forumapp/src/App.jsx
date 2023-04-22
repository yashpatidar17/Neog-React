import './App.css'
import { Link,Routes,Route} from "react-router-dom"
import { Home } from './Pages/Home'
import { Question } from './Pages/Question'
import { Answer } from './Pages/Answer'

function App() {
 
  return (
    <>
      <h1>Js Forum</h1>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/question" element={<Question/>}/>
        <Route path ="/answer" element={<Answer/>}/>
      </Routes>
    </>
  )
}

export default App
