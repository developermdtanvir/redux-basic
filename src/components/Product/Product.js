const Product = ({product,addToCart}) => {
    return(
        <div className="flex">
            <h1 className="border-4 ">{product.name}</h1>
            <button className="p-2 bg-green-200" onClick={()=>addToCart(product.id,product.name)}>addToCart{product.id}</button>
        </div>
    )
}

export default Product;