import React from 'react'
import '../css/contacto.css'
const MainContacto = () => {
  return (
    <div className='mainContacto'>

    <h2>Contacto</h2>
      <form action="">
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Correo' />
        <input type="text" placeholder='Título'/>
        <input type="text" placeholder='Mensaje'/>
      </form>
    </div>
  )
}

export default MainContacto