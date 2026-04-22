import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../../components/pages/Home/Home'
import Contact from '../../components/pages/Contact'
import Projects from '../../components/pages/Projects/Projects'
import Header from '../../components/organisms/Header/Header'
import Main from '../Main/Main'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
      </div>
    </Router>
  )
}

export default App
