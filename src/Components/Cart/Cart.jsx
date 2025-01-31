import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return(
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }
    return (
        <div>
        <div className='CartMaster' >
        <div className='CartOption'> 
        { cart.map(p => <CartItem key={p.id} {...p}/>)}
        </div>
        <div className='CartButton'>
        <h3 className='h3'>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="RemoveCart">Limpiar carrito</button>
        <Link to='/checkout' className='Checkout'>Checkout</Link>
        </div>
        </div>
        
        </div>
    )
}

export default Cart
