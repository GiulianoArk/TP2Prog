import logo from "../img/ShadowCompanyLogo.png";
import { Link } from "react-router-dom";
import data from "../database/db.json";
import useThemeStore from "../js/themeStore";

import "../css/header.css";

const Header = () => {
  const { toggleTheme } = useThemeStore();

  return (
    <header className="header">
      <h1>
        Portfolio de {data.persona.nombre} {data.persona.apellido}
      </h1>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button onClick={toggleTheme} className="btnTema" aria-label="Cambiar tema">
          <img className="logo" src={logo} alt="Cambiar tema" />
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/proyectos" className="nav-link" >Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link to="/acerca" className="nav-link">Acerca de</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
