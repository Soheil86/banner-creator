import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import UserListPage from './pages/UserListPage'
import UserEditPage from './pages/UserEditPage'
import BannerListPage from './pages/BannerListPage'
import BannerEditPage from './pages/BannerEditPage'
import BannerCreatePage from './pages/BannerCreatePage'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/admin/userlist' element={<UserListPage />} />
            <Route path='/admin/bannerlist' element={<BannerListPage />} />
            <Route path='/admin/banner/create' element={<BannerCreatePage />} />
            <Route path='/admin/banner/:id/edit' element={<BannerEditPage />} />
            <Route path='/admin/user/:id/edit' element={<UserEditPage />} />
          
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
