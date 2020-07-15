import React from "react"
import { useParams } from 'react-router-dom';

function Product(){
    let { productId} = useParams();
    return (
        <div>
            Product {productId} changes
        </div>
    )
}

export default Product;