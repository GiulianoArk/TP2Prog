import React from 'react'
import MainContacto from '../components/MainContacto'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Contacto = ({persona, redes}) => {
  return (
    <div>
        <>
      <Header persona={persona} />

        </>

      <MainContacto />
     
      <>
      <Footer redes={redes} />
      </>
    </div>
  )
}

export default Contacto