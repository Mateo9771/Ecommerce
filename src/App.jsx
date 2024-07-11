import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './Components/CartContext/CartContext'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'


function App() {

  return (
    <div >
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Bienvenido'} />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>
    </CartProvider>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
