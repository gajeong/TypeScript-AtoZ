import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import WritePage from './pages/WritePage'
import DetailPage from './pages/DetailPage'

function App() {
    return (
        <div className='text-center'>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/write' element={<WritePage />} />
                <Route path='/detail' element={<DetailPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
            <NavigationBar />
        </div>
    )
}

export default App
