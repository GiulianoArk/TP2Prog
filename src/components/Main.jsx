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
        <div className="contenedorCard-Home">
          <div className="card-home">
            <img src={giulianoImg} alt="Giuliano" />
            <div>
              <h2>
                {data.persona.nombre} {data.persona.apellido}
              </h2>
              <h4 className="sobreMi-home">{data.persona.descripcion}</h4>
            </div>
          </div>
        </div>
        
      </>
    </main>
  );
};

export default Main;
