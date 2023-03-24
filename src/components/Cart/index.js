import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

function Cart(props){
    console.log(props);
    return(
        <div className="fixed">
            <h1>This is a cart components</h1>
            <p>My total data is {props.cart.length}</p>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state);
    return {
        data: state.data,
        cart:state.cart,
        loading: state.loading,
        error: state.error,
    }
}

const mapDispathchToProps = {
    removeFromCart : removeFromCart,
}
export default connect(mapStateToProps,mapDispathchToProps)(Cart);