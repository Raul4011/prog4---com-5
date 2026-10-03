import { BrowserRouter,Routes,Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import ProductsDetail from "./pages/ProductsDetail"

function App() {


  return (
    <>
    <BrowserRouter >
      {/* rutas publicas */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:name-id' element={<ProductsDetail />} />
        <Route path="*" element={<NotFound />}/>
        {/* rutas privadas */}
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
