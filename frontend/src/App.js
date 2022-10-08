import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <h1>Welcome To APP</h1>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
