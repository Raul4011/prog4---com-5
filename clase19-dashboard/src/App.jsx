import { useState } from "react"
import Products from "./pages/Products"
import Clientes from "./pages/Clientes"
import Home from "./pages/Home"
import Aside from "./pages/Aside"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login"

const App = () => {

  const [page, setPage] = useState('productos')
  const [showProducts, setShowProducts] = useState(false)

  const renderPage = () => {
    switch (page) {
      case page === "productos":
        return <Products />
        break;
      case page === "clientes":
        return <Clientes />
        break;
      case page === "home":
        return <Home />
        break;
    }
  }


  return (
    <BrowserRouter>
      <div className="flex">
        <div className="w-[20%] border bg-red-300">
          <Aside />
        </div>
        <div className="w-[80%] border bg-blue-300">
         <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/home" element={<Home />} />
          </Routes>

        </div>
      </div>

    </BrowserRouter>

  )
}

export default App