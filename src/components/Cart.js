import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/CartSlice";

const Cart=()=>{

    const cartItem = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch()

    return <div className="text-center  m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button onClick={()=>dispatch(clearCart(cartItem))
            }
            className="p-2 m-4 bg-black text-white rounded-lg">Clear Cart</button>
        {cartItem.length===0 && <h1>Your cart is empty.Add items to cart! </h1>}    
        <Itemlist data={cartItem}/>
        </div>
        
        
    </div>
};

export default Cart;