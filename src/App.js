import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import Login from './components/Auth/Login'
import Categories from './components/Categories/Categories'
import Todos from './components/Todos/Todos'
import Home from './components/Home/Home'
import './contexts/AuthContext'
import AuthProvider from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <div className='App'>
      <AuthProvider>
      <Router>
          <Navigation />
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
            <Route path='/todos' element={<ProtectedRoute><Todos /></ProtectedRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
      <Footer />
      </AuthProvider>
    </div>
  )
}
