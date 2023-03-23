import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import Product from "../Product/Product";

const Shop = (props) => {
    console.log(props);
    const {products,addToCart} = props;
    return(
        <div>
            {
                products.map(product => <Product addToCart={addToCart} product={product} key={product.id} />)
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        cart : state.cart,
        products: state.products
    }
}

const mapDispatchToProps =  {
    addToCart : addToCart,
    removeFromCart : removeFromCart
}

// const connectToStore = connect(mapStateToProps,mapDispatchToProps);

//  connectToStore(Shop);

export default connect(mapStateToProps,mapDispatchToProps)(Shop);