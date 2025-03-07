import { useDispatch, useSelector } from "react-redux";
import { remove_cart, update_cart } from "../action/cartAction";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Shooping Cart</h2>  
            {cart.length == 0 ? <p>cart is Empty</p> : null}
            <ul>
                {cart.map((item)=> (
                   <li key={item.id}>
                    {item.name} - {item.price}
                    <input 
                    type="number"
                    value={item.quantity}
                    onChange={(e)=> dispatch(update_cart(item.id, Number(e.target.value)))}
                    min="1"
                    />

                    <button onClick={() => dispatch(remove_cart(item.id))}>REMOVE_CART</button>
                   </li> 
                ))}

                <h3>Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>

            </ul>
        </div>
    )
}

export default Cart