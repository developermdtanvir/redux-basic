import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = (props) => {
    const {cart,removeFromCart} = props;
    return(
        <div>
            <ul>

                {
                    cart.map(items => <li key={items.cartId}>{items.name}<button className="text-5xl font-bold text-teal-500" onClick={()=>removeFromCart(items.cartId)}>x</button></li>)
                }
            </ul>
            
        </div>
    )
}
const mapStateToProps = state => {
   return { cart:state.cart }
}

const mapDispatchToProps = {
    removeFromCart : removeFromCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);