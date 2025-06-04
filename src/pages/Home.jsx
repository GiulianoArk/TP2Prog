import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Home = ({persona, redes}) => {




return (
    <>
    <Header persona={persona} />
    
    <>
    <Main persona={persona} />
    </>

    <Footer redes={redes}/>
    </>
)
 
}



export default Home