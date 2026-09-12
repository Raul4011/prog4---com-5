import Footer from "../Components/Footer"
import Header from "../Components/Header"
import MainHome from "../Components/MainHome"
import Navigation from "../Components/Navigation"



const Home = (props) => {

    //console.log(props);

    const Alumno = {
        nombre:'alvaro llovera',
        edad:25,
        estadoCivil:'soltero',
        legajo:52525
    }

    //destructuracion en JS

    const {nombre,edad,estadoCivil,legajo} = Alumno

    let gatitos = ["michifuz",'tiger','chatran']

    // const [a,b,c] = gatitos

    //console.log(a,b,c);

    console.log(gatitos);
    gatitos.push('negrita')

    console.log(gatitos);

    return (
       <div className="home">
           <Header />
           <Navigation />
           <MainHome titulo={props.titulo} saludar={props.saludar} perritos={props.perritos} Profesor={props.Profesor}/>
           <Footer/>
       </div>
       
    )


}

export default Home




