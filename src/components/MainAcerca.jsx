import "../css/acerca.css";

import data from "../database/db.json";
import utn from "../img/utn.jpg";

const MainAcerca = () => {
  return (
    <div className="main-acerca">
     

    <div className="contenedorCard">

    <div className="card" style={{ width: "18rem" }}>
        <img src={utn} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{data.persona.descripcion}</p>
        </div>
      </div>

    </div>

      
    <div className="contenedorTitulo">
          <h3>Lenguajes</h3>
    </div>
      

      <div className="contenedorCard">

    

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={data.lenguajes.HTML.imagen}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4>{data.lenguajes.HTML.nombre}</h4>
            <p className="card-text">{data.lenguajes.HTML.descripcion}</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={data.lenguajes.CSS.imagen}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4>{data.lenguajes.CSS.nombre}</h4>
            <p className="card-text">{data.lenguajes.CSS.descripcion}</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={data.lenguajes.JavaScript.imagen}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4>{data.lenguajes.JavaScript.nombre}</h4>
            <p className="card-text">{data.lenguajes.JavaScript.descripcion}</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={data.lenguajes.Java.imagen}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4>{data.lenguajes.Java.nombre}</h4>
            <p className="card-text">{data.lenguajes.Java.descripcion}</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={data.lenguajes.CSharp.imagen}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4>{data.lenguajes.CSharp.nombre}</h4>
            <p className="card-text">{data.lenguajes.CSharp.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAcerca;
