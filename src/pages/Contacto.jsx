import React from 'react'
import MainContacto from '../components/MainContacto'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Contacto = ({persona, redes, contacto}) => {
  return (
    <div>
        <>
      <Header  />

        </>

      <MainContacto />
     
      <>
      <Footer redes={redes} />
      </>
    </div>
  )
}

export default Contacto