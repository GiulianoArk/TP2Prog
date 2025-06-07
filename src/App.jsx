import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Acerca from './pages/Acerca';
import useThemeStore from './js/themeStore'; // Ruta ajustada
import './App.css';

const App = () => {
  
  const { theme } = useThemeStore();

  return (
    <div className={`app ${theme}`}>
     

      <BrowserRouter>
        <main className={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca" element={<Acerca />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
