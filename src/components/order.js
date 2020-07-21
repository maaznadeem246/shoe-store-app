import React, {useContext, useEffect, useState} from "react"
import { Context } from "../context/store"
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
    mainDiv:{
        width:'inherit',
        padding:10,

        boxShadow:theme.shadows[4],
        borderRadius:4,
    },
    root:{
        padding: 20,
        paddingTop: 0,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 20,
        }
    },
    orderHead:{
        ...theme.typography.h5,
        color: '#424242',
        textAlign:'center',
        padding:10,
    },
    mainOrders:{
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop:3,
        paddingBottom:3,
        color: '#424242',
    },
    orderimg:{
        width:40,
        height:40,
    },
    mainOrderDiv:{
        maxHeight:250,
        overflowY:'scroll',
        paddingTop:10,
        paddingBottom: 10
    },
    totalPrice:{
        padding: 15,
        fontSize:17,
        wordSpacing: 4,
        color: '#424242',
        textAlign:'center'
    },
    totalPri:{
        fontWeight: 500,
        backgroundColor:'#424242',
        color:'white',
        padding: 8,
        borderRadius:5,
    }
}))

function Order(){

    const { cart,  } = useContext(Context)
    const classes = useStyles();
    const [orderCart, setOrderCart] = useState({});

        useEffect(()=>{
            setOrderCart(cart)
        },[cart])

        const totalPrice  = () => {
            let cartData  = {...cart}
            let val = Object.values(cartData)
            let vll = val.map(v=>{
                return Number(v.price) * v.quantity 
            })
            let d = vll.reduce((total,amount)=>{ 
                return total + amount
            })

           return d
        }

    return (
        <div className={classes.root}>
        <div className={classes.mainDiv}>
            <div className={classes.orderHead}>Order</div>
            <div className={classes.mainOrderDiv}>
                {
                 orderCart &&  Object.entries(orderCart).map(v=>(
                    <div className={classes.mainOrders}>
                            <img className={classes.orderimg} src={v[1].imgAdd} alt="Product Pic" />
                            <Typography className={classes.ordername}>{v[1].name}</Typography>
                            <Typography className={classes.orderquantity}>{v[1].quantity} Qty</Typography>
                            <Typography className={classes.orderprice}>$ {Number(v[1].price) * v[1].quantity}</Typography>

                    </div>
                ))
                }
            </div>
            <div>
                    <Typography className={classes.totalPrice}>
                        Your Payment <span className={classes.totalPri}> ${totalPrice()} </span>
                    </Typography>
            </div>
        </div>
        </div>
    )
}

export default Order;