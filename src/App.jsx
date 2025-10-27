import './App.css'
import Header from './componentes/header'
import Home from './pages/inicio'
import Footer from './componentes/footer'
import Animais from './pages/animais'
import { useState } from 'react'


function App() {
  const[pagina, setpagina] = useState("home")

  return (
    <>
    <Header/>

    <nav className='nav-app'>
      <button className="botao-inicio" onClick={() => setpagina("home")}>Inicio</button>

      <button className="botao-animais" onClick={() => setpagina("animais")}>Ver Animais</button> 
    </nav>

    {pagina == "home" && <Home/>}
    {pagina == "animais" && <Animais/>}

    <Footer/>
    </>
  )
}

export default App
