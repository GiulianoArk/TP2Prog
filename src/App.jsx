import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Contacto from './pages/Contacto'
import Acerca from './pages/Acerca'

import "./App.css"



const App = () => {
  
 const redes={
        instagram: "https://www.instagram.com/giuliano.c.33/",
        github: "https://github.com/GiulianoArk",
        facebook: "https://www.facebook.com/share/1AahcJtqFi/?mibextid=qi2Omg",
        reddit: "https://www.reddit.com/user/its_arkhamknight/"
    }
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home redes={redes}  />} />
        <Route path="/contacto" element={<Contacto  redes={redes} />} />
        <Route path="/acerca" element={<Acerca redes={redes}  />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
