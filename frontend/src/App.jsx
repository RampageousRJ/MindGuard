import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About/About'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Footer from './Components/Footer'
import Articles from './Pages/Articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
      <Footer />
    </Router >
  )
}

export default App
