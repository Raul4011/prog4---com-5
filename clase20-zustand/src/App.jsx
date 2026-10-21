import { useState } from "react"
import { Row, Col } from "react-bootstrap"
import Padre1 from './components/Padre1'
import Padre2 from './components/Padre2'
import useStore from "./store/useStore"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Products from "./pages/Products"
import PrivateRoute from "./routes/PrivateRoute"
import AdminRoute from "./routes/AdminRoute"
import Clientes from "./pages/Clientes"
import Unauthorized from "./pages/Unauthorized"

const App = () => {

  const {color}=useStore()

  const [count,setCount] = useState(0)
  const [form,setForm] = useState({})

  const getCount = (contador) =>{
    setCount(contador)
  }

  const getForm = (formulario) =>{
      setForm(formulario)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/unauthorized" element={<Unauthorized/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/products" element={<Products/>}/>
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path="/clientes" element={<Clientes/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
    // <Row className={color ? 'bg-amber-500' : 'bg-blue-500'}>
    //   <Col md={6} lg={6}>
    //     <Padre1 count={count} form={form}/>
    //   </Col>
    //   <Col md={6}>
    //     <Padre2  getCount={getCount} getForm={getForm}/>
    //   </Col>
    // </Row>
  )
}

export default App