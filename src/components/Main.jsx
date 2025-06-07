import React from "react";
import { Link } from "react-router-dom";
import "../css/Main.css";
import "../App.css";
import data from "../database/db.json";

import giulianoImg from "../img/giuliano.jpg";

const Main = () => {
  return (
    <main>
      <>
        <div className="contenedorCard">
          <div className="card">
            <img src={giulianoImg} alt="Giuliano" />
            <div>
              <h2>
                {data.persona.nombre} {data.persona.apellido}
              </h2>
              <h4 className="sobreMi">{data.persona.descripcion}</h4>
            </div>
          </div>
        </div>
        <div className="contenedorBtnProyectos">
          
        </div>
      </>
    </main>
  );
};

export default Main;
