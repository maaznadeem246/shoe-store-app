import React, {useContext} from "react";
import { Context } from "../context/store"
import ProductsComponent from "./productsComponent"



function Launch() {
    const { specificProducts , } = useContext(Context)
    const p = specificProducts('launch')

    return (
        <ProductsComponent p={p} title="Launch" urlTitle="launch" />
    )
}

export default Launch