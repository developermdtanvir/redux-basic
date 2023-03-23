import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const Cart = (props) => {
    const {cart,removeFromCart} = props;
    console.log(cart);
    return(
        <div>
            <ul>

                {
                    cart.map(id => <li key={id}>{id}<button className="text-5xl font-bold text-teal-500" onClick={()=>removeFromCart(id)}>x</button></li>)
                }
            </ul>
            
        </div>
    )
}
const mapStateToProps = state => {
    console.log('state',state);
   return { cart:state.cart }
}

const mapDispatchToProps = {
    removeFromCart : removeFromCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);