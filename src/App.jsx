import './App.css'
import Login from './pages/Login'
import ChatRoom from './pages/ChatRoom'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider,AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <AuthContextProvider>
      <div>
        <Navbar></Navbar>

        {/* Routes  */}
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/chatroom' element={<ProtectedRoute/>}></Route>
        </Routes>

      </div>

    </AuthContextProvider>

  )
}

export default App
