import React from "react";
import logo from "../img/ShadowCompanyLogo.png";
import { Link } from "react-router-dom";
import data from "../database/db.json";
import useThemeStore  from './js/themeStore'
import "../css/header.css";

const Header = () => {
  
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="header">
      <h1>
        Portfolio de {data.persona.nombre} {data.persona.apellido}
      </h1>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

       
        <img
        src={logo}
        alt="Cambiar tema"
        onClick={toggleTheme}
      />



        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav nav-links">
      <li class="nav-item">
        <Link to="/" class="nav-link">
          Home
        </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Proyectos</a>
      </li>
      <li class="nav-item">
        <Link to="/contacto" class="nav-link">
          Contacto
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/acerca" class="nav-link">
          Acerca de
        </Link>
      </li>
    </ul>
  </div>
</nav>

    </header>
  );
};

export default Header;
