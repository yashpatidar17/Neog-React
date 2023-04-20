import {Routes,Route,Link} from "react-router-dom"
import './App.css'
import { Home } from "./pages/Home"
import { Done } from "./pages/Done"
import { Open } from "./pages/Open"
import { TodoInfo } from "./pages/TodoInfo"

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <nav>
        <Link to="/">Home </Link> ||
        <Link to="/done"> Done</Link> ||
        <Link to="/open"> Open</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/done" element={<Done/>}/>
        <Route path="/open" element={<Open/>}/>
        <Route path="/todoinfo/:todoId" element={<TodoInfo/>}/>
      </Routes>
    </div>
  )
}

export default App
