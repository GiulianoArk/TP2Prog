import React from 'react'
import Footer from '../components/Footer'
import MainAcerca from '../components/MainAcerca'
import Header from '../components/Header'
const AcercaDe = ({persona, redes}) => {
  return (
    <div>
      
      <Header persona={persona} />

      <MainAcerca />

      <Footer redes={redes} />

    </div>
  )
}

export default AcercaDe