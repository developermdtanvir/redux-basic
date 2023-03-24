import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { loadData } from "../../redux/store";
import Product from "../Product";
function Shop (props){
    console.log(props);
    const {loadData} = props;
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
            <button onClick={loadData}>loadData</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        cart : state.cart,
        data: state.data
    }
}

const mapDispathchToProps = {
    addToCart: addToCart,
    removeFromCart : removeFromCart,
    loadData:loadData
}

export default connect(mapStateToProps,mapDispathchToProps)(Shop);