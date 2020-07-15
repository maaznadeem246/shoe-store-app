import React, {useContext} from "react";
import { Context } from "../context/store"

function Launch() {
    const { specificProducts} = useContext(Context)
    const p = specificProducts('launch')
    console.log(p)
    return (
        <div style={{marginTop:10}}>Launch</div>
    )
}

export default Launch