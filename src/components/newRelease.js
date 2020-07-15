import React, {useContext} from "react";
import { Context } from "../context/store"
import ProductsComponent from "./productsComponent"



function NewRelease() {
    const { specificProducts} = useContext(Context)
    const p = specificProducts('newreleases')

    return (
        <ProductsComponent p={p} title="New Releases" urlTitle="newreleases" />
    )
}

export default NewRelease