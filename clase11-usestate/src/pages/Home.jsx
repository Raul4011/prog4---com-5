import React from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'

const Home = () => {



    const getDato = () =>{
        console.log('ahola');
    }

    let nombre = "alvaro"

  return (
    <div>
        <Header getDato={getDato} nombre={nombre}/>
        <MainHome/>
        <Footer/>
    </div>
  )
}

export default Home