import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import Product from "../Product";
function Shop (props){
    console.log(props);
    return(
        <div className="w-1/2 mx-auto">
            <table>
                <thead className="border-b-2">
                    <tr>
                        <th>Description</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody className="border-2">
                    <Product />
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart : state.cart,
        products: state.products
    }
}

const mapDispathchToProps = {
    addToCart: addToCart,
    removeFromCart : removeFromCart
}

export default connect(mapStateToProps,mapDispathchToProps)(Shop);