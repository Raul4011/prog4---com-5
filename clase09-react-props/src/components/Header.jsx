
import Saludar from "./Saludar"
import "../css/Header.css"


const Header = () => {

    let alumnos = ['marcos','rita','adrian']
let edad = 30
    return (
        <div className="header">
            <br />
            <br/>
            <h1 className="h1">Suplementos COM 5</h1>
            <br/>
            <Saludar titulo="Com 5" saludo="hola" alumnos={alumnos} edad={edad}/>
        </div>
    )
}
export default Header