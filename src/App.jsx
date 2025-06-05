import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Contacto from './pages/Contacto'
import Acerca from './pages/Acerca'

import "./App.css"
import useThemeStore  from './js/themeStore'


const App = () => {
  
 const { theme, toggleTheme } = useThemeStore();
  
  return (
    
     <div className="app">
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>

      <BrowserRouter>
        {/* Solo el main cambia de estilo según el tema */}
        <main className={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca" element={<Acerca />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
export default App
