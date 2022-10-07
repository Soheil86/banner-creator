import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <h1>Welcome To APP</h1>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
