import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavigationBar from './components/NavigationBar'
import Footer from './components/FooterBar'
import FooterBar from './components/FooterBar'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavigationBar/>
      <div className='p-2.5'><Home/></div>
      
      <FooterBar/>
    </div>
  )
}

export default App
