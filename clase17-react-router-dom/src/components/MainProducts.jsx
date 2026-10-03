import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const MainProducts = () => {

    let products = [{ id: 1, name: "televisor" }, { id: 2, name: "laptop" }, { id: 3, name: "tablet" }]

        const [productList, setProductList] = useState([])

        useEffect(() => {
            setProductList(products)
        },[])


        console.log(productList);

        const getCharacters = async () =>{
            let response = await fetch("https://rickandmortyapi.com/api/character")
            let data = await response.json()
            console.log(data.results);
            setProductList(data.results)
        }
        
        useEffect(() => {
            getCharacters()
        },[])
       

  return (
    <div>
        <h1>Products</h1>
        <ul>
            {productList.map((product) => (
                <Link key={product.id} to={`/products/${product.name}`}>
                    {product.name}
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default MainProducts