import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Contacto from './pages/Contacto'
import Acerca from './pages/Acerca'

import "./App.css"



const App = () => {
  
  const persona ={

    nombre: "Giuliano",
    apellido: "Calcagni",
    edad: 18,
    email: "calcagnigiuliano770@gmail.com",
    lenguajes: ["HTML", "CSS", "JavaScript", "Java", "C#"],
    descripcion: "Estudiante de la Universidad Tecologica Nacional, cursando el segundo año de la Tecnicatura Universitaria en Programación.",
    telefono: "+54 9 381 217-3556"
}
   
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
        <Route path="/" element={<Home persona={persona} redes={redes} />} />
        <Route path="/contacto" element={<Contacto persona={persona} redes={redes} />} />
        <Route path="/acerca" element={<Acerca persona={persona} redes={redes} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
