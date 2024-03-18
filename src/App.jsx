import './App.css'
import Logo from './components/layout/logo/Logo.jsx'
import Tittle from './components/layout/tittle/Tittle.jsx'
import Register from './components/layout/register/Register.jsx'
import Login from './components/layout/Login/Login.jsx'



function App() {
 
  return (
    <>
    <div className='appContainer'>
      <div>
        <Logo />
      </div>
      <div>
        <Tittle />
        <Register />
        <Login />
      </div>
    </div>
    </>
  )
}

export default App
