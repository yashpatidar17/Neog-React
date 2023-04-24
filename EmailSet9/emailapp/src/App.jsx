import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Inbox } from './Pages/Inbox'
import { Sent } from './Pages/Sent'
import { Email } from './Pages/Email'

function App() {
  return (
    <>
     <h1>Email</h1>
     <Link to = "/inbox">Inbox</Link>
     <Link to = "/sent"> Sent</Link>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/inbox" element={<Inbox/>}/>
      <Route path="/sent" element={<Sent/>}/>
      <Route path="/email/:emailId" element={<Email/>}/>
     </Routes>
    </>
  )
}

export default App
