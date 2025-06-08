import React from "react";
import "../css/main.css";
import rickymorty from "../img/rickymorty.jpg";
import pedidosya from "../img/pedidosya.jpg";

const MainProyectos = () => {
  return (
    <div className="main-proyectos">
      <div className="contenedorCard">
        <a
          href="https://github.com/GiulianoArk/API-Ricardo-y-Mauricio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={rickymorty}
              className="card-img-top"
              alt="Proyecto Rick y Morty"
            />
            <div className="card-body">
              <h4>Proyecto Rick y Morty</h4>
              <p className="card-text">Una API de Rick y Morty</p>
            </div>
          </div>
        </a>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={pedidosya}
            className="card-img-top"
            alt="Proyecto PedidosYa"
          />
          <div className="card-body">
            <h4>Proyecto PedidosYa</h4>
            <p className="card-text">Un clon de la página web de Pedidos Ya, una empresa de delivery de comida. El proyecto todavía se encuentra en desarrollo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProyectos;
