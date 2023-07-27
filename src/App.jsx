import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import WishlistPage from './pages/WishlistPage'
import CreateAdPage from './pages/CreateAdPage'
import EditAdPage from './pages/EditAdPage'
import NotFound404 from './pages/NotFound404'
import MainLayout from './layouts/MainLayout'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='*' element={<NotFound404/>}/>
      </Route>
    </Routes>
  )
}

export default App
