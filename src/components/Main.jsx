import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";


import giulianoImg from "../img/giuliano.jpg";




const Main = (props) => {
  return (
   <main> 
   <>
      <div className="contenedorCard">
        <div className="card">
          <img src={giulianoImg} alt="Giuliano" />
          <div>
            <h2>{props.persona.nombre} {props.persona.apellido}</h2>
            <h4 className="sobreMi">{props.persona.descripcion}</h4>
          </div>
        </div>
      </div>
      <div className="contenedorBtnProyectos">
            <a
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DdQw4w9WgXcQ&ved=2ahUKEwjB-vSQ5e6MAxUXF7kGHa2JCPsQ78AJegQICRAB&usg=AOvVaw0aHtehaphMhOCAkCydRLZU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btnProyectos">MIS PROYECTOS</button>
            </a>
          
         
      </div>

    </>
    </main>
  );
};

export default Main;
