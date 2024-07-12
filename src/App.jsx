import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavigationBar from './components/NavigationBar'
import Footer from './components/FooterBar'
import FooterBar from './components/FooterBar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
function App() {
  const [count, setCount] = useState(0)

  const [view, setView] = useState('login');

  const showRegister = () => setView('register');
  const showLogin = () => setView('login');
  const showForgotPassword = () => setView('forgotPassword');

  return (
    <div className='App'>
      <NavigationBar/>
        {view==='login' ?
          <Login showRegister={showRegister} showForgotPassword={showForgotPassword} />
          : view==='register' ? <Register showLogin={showLogin} />: 
          <ForgotPassword showLogin={showLogin} />
        }
      <FooterBar/>
    </div>
  )
}

export default App
