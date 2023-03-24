import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { loadData } from "../../redux/store";
import Cart from "../Cart";
import Product from "../Product";
function Shop (props){
    const {data,loading,addToCart} = props;


    if(loading){
        return <h1>Loading</h1>
    }
    return(
        <div>
            <div>
                <Cart />
            </div>
            <div className="w-1/2 mx-auto">
                <table>
                    <thead className="border-b-2">
                        <tr className="space-x-20">
                            <th>Description</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody className="border-2 m-10">
                        {
                            data.products.slice(1,10).map(data => <Product addToCart={addToCart} key={data.id} data={data} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        data: state.data,
        loading: state.loading,
        error: state.error,
    }
}

const mapDispathchToProps = {
    addToCart: addToCart,
    removeFromCart : removeFromCart,
    loadData:loadData
}

export default connect(mapStateToProps,mapDispathchToProps)(Shop);