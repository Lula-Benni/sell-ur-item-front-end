import { useState, React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavigationBar from './components/NavigationBar'
import Footer from './components/FooterBar'
import FooterBar from './components/FooterBar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
import MyItems from './components/menu/MyItems'
import AddItems from './components/menu/AddItems'
import { Routes, Route } from 'react-router-dom'
import EditPrice from './components/edit-components/EditPrice'
import EditProfile from './components/menu/EditProfile'
import SavedItems from './components/SavedItems'
import Messages from './components/Messages'
import ChatWindow from './components/ChatWindow'
function App() {
  const [view, setView] = useState('login');

  const showRegister = () => setView('register');
  const showLogin = () => setView('login');
  const showForgotPassword = () => setView('forgotPassword');

  return (
    <div className='App'>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/chat-window" element={<ChatWindow />}/>
        <Route path='/saved-items' element={<SavedItems/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='edit-profile' element={<EditProfile/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/my-items" element={<MyItems />} />
        <Route path='/add-items' element={<AddItems/>} />
      </Routes>
      <FooterBar/>
    </div>
  )
}

export default App
