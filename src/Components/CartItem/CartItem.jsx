import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const CartItem = ({ id, name, price, quantity, img }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className='CartItem '>
            <div className='CartItem-details col-12'>
                <h6>{name}</h6>
                <p>Cantidad: {quantity}</p>
                <p>Precio: ${price}</p>
                <p>Subtotal: ${price * quantity}</p>
                <button onClick={() => removeItem(id)} className='CartItem-remove'>Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;
