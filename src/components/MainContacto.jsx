import React from 'react'
import '../css/contacto.css'
const MainContacto = () => {
  return (
    <div className='mainContacto'>

    <h2>Contacto</h2>
      <div className='contenedorFormulario'>

    <form className="form-container">
  <div className="form-group">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input
      type="text"
      className="form-input"
      id="nombre"
      name="nombre"
      placeholder="Tu nombre"
    />
  </div>

  <div className="form-group">
    <label htmlFor="correo" className="form-label">Correo</label>
    <input
      type="email"
      className="form-input"
      id="correo"
      name="correo"
      placeholder="tucorreo@ejemplo.com"
    />
  </div>

  <div className="form-group">
    <label htmlFor="asunto" className="form-label">Asunto</label>
    <input
      type="text"
      className="form-input"
      id="asunto"
      name="asunto"
      placeholder="Motivo del mensaje"
    />
  </div>

  <div className="form-group">
    <label htmlFor="descripcion" className="form-label">Mensaje</label>
    <textarea
      className="form-textarea"
      id="descripcion"
      name="descripcion"
      rows="4"
      placeholder="Escribe tu mensaje aquí..."
    ></textarea>
  </div>

  <div className="form-actions">
    <button type="submit" className="form-button">Enviar</button>
  </div>
</form>



      </div>
    </div>
  )
}

export default MainContacto