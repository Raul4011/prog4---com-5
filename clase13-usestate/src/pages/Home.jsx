import React from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'
import Formulario from '../components/Formulario'

const Home = () => {
  return (
    <div>
        <Header />
        <MainHome/>
        <Formulario/>
        <Footer />
    </div>
  )
}

export default Home