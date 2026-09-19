import Imagen from '../assets/Dados.jpeg'

const Header = () => {
    
    return (
        <div>
            <br />
        <h1 className='text-danger'>Welcome to useState</h1>
        <br />
        <img src={Imagen} alt="" />
        </div>
    )
}

export default Header