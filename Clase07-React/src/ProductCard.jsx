import './ProductCard.css'


export const ProductCard = () =>{

    let notebook = {
        nombre:'Bangho UltraPremium',
        marca:'Bangho',
        precio:2_500_000,
        imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIAkXE341aOz9DBQNSGNMG6gPJu5VtepMp_EEzRgAlA&s=10',
        descripcion:'Amd Ryzen7 7600x - 2tb - 16gb ram'
    }

    return (
        <>
            <div className="ProductCard">
                <img className='imagen' src={notebook.imagen} alt="" />
                <h4>titulo: {notebook.marca}</h4>
                <p>precio: {notebook.precio}</p>
                <p>descripcion: {notebook.descripcion}</p>
            </div>
        </>
    )
}

//export default ProductCard