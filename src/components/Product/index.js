function Product({data,addToCart}){
    return (
        <>
            <tr>
                <td>
                    <h1>{data.brand}</h1>
                    <img src={data.images[0]} className="w-[200px] rounded-md" alt={data.description} />
                </td>
                <td>Not Available</td>
                <td>{data.stock}</td>
                <td>
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-white p-2 rounded-md" onClick={()=>addToCart(data.id)}>addToCart</button>
                </td>
                <td>
                    {data.price} <span>TK</span>
                </td>
            </tr>
        </>
    )
}

export default Product;