import React, {useContext} from "react";
import { Context } from "../context/store"
import ProductsComponent from "./productsComponent"



function NewRelease() {
    const { specificProducts} = useContext(Context)
    const p = specificProducts('sale')

    return (
        <ProductsComponent p={p} title="Sale" urlTitle="sale" />
    )
}

export default NewRelease