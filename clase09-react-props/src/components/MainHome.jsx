
import Table from 'react-bootstrap/Table';
import '../css/MainHome.css'
import ProductCard from './ProductCard';


const MainHome = () => {


    const suplementos = [{
        id: 1,
        nombre: "Creatina",
        precio: 25000,
        marca: "star nutrition",
        descripcion: "la mejor del mercado",
        imagen: "https://cdn.batitienda.com/baticloud/images/product_picture_b62840d128e2464a98e5fc203f10384a_638717584034746552_0_m.jpg"
    }, {
        id: 2,
        nombre: "Proteina",
        precio: 50000,
        marca: "Ena nutrition",
        descripcion: "sabor chocolate",
        imagen: "https://farmacityar.vtexassets.com/arquivos/ids/243161/203644_suplemento-dietario-ena-whey-protein-sabor-chocolate-x-930-g__imagen-1.jpg?v=638211442368130000"
    }, {
        id: 3,
        nombre: "Aminoacidos",
        precio: 20000,
        marca: "xtrenght nutrition",
        descripcion: "postentrenamiento",
        imagen: "https://xtrenght-nutrition.com/media/fotos_productos/101/Pro-bcaa.500.png"
    }]



    const perritos = ['firu', 'paco', 'blanquita']


    // perritos.forEach((perrito) => {
    //     return <li></li>
    // })


    return (
        <div className="MainHome">
            <br />
            <h3 id='h3'>suplementos ocampo</h3>
            <br /> 
            <br />
            <Table striped bordered hover className='suplements'>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>nombre</th>
                        <th>marca</th>
                        <th>descripcion</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {suplementos.map((sup, index) => {
                        return <tr key={index}>
                            <td >{sup.id}</td>
                            <td >{sup.nombre}</td>
                            <td >{sup.marca}</td>
                            <td >{sup.descripcion}</td>
                            <td >{sup.precio}</td>
                            <td >
                                <img src={sup.imagen} alt={sup.nombre} style={{ width: '100px', height: '100px' }} />
                            </td>
                        </tr>
                    })}

                </tbody>
            </Table>
                    <br /><br />

                    <h4>Listado de Perritos</h4>
                    <br/>
                    <ul id="ul">
                {perritos.map((perrito, index) => (
                    <li key={index}>{perrito}</li>
                ))}
            </ul>
            <br /><br />
            <h4>Listado de productos</h4>
            <br/>
            <ProductCard titulo="Creatina" descripcion="la mejor del mercado" imagen="https://cdn.batitienda.com/baticloud/images/product_picture_b62840d128e2464a98e5fc203f10384a_638717584034746552_0_m.jpg" />
            <ProductCard titulo="Proteina" descripcion="sabor chocolate" imagen="https://farmacityar.vtexassets.com/arquivos/ids/243161/203644_suplemento-dietario-ena-whey-protein-sabor-chocolate-x-930-g__imagen-1.jpg?v=638211442368130000" />
            <ProductCard titulo="Aminoacidos" descripcion="postentrenamiento" imagen="https://xtrenght-nutrition.com/media/fotos_productos/101/Pro-bcaa.500.png" />
        </div>
    )
}

export default MainHome