import React, { useContext, useEffect, useState} from "react"
import { Context } from "../context/store"
import Order from "./order"
import {
    Add as AddIcon,
    Remove as RemoveIcon,
    DeleteForever as DeleteForeverIcon,
} from '@material-ui/icons';


import { 
    Grid, 
    IconButton, 
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   
    cartHead:{
        ...theme.typography.h4,
        color:'#424242',
        padding: 20,
    },
    cartProductImg:{
        width:50,
        height:50
    },
    cartTable:{
        padding: 20,
        color: '#424242',
        maxHeight:700,
        width: 'inherit',
        boxShadow: theme.shadows[4],
        
        [theme.breakpoints.down('md')]: {
            
        }

    },
    quantityDiv: {
        display: 'flex',
        padding: 5,
        justifyContent:'center',
        [theme.breakpoints.down('md')]: {

        }
    },
    quantityIconButton: {
        border: '1px solid #424242',
        paddingTop: 0,
        paddingBottom: 0,
        height: 30,
        width:30,
        borderRadius: 8,
        color: '#424242',
        '&:hover': {
            backgroundColor: '#424242',
            color: 'white',
        },
        [theme.breakpoints.down('md')]: {
        
        }
    },
    quantityIcon: {
        fontSize: '1rem',
    },
    quantityValue: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#424242',
        padding: "0px 20px 0px 20px",
        [theme.breakpoints.down('md')]: {
            fontSize: 24,
        },
    },
    cellCss:{
        padding:3,
        paddingTop:6,
        textAlign:'center',
         borderBottom: 'none',
    },
    cellCssHead:{
        fontSize:16,
        textAlign: 'center',
        borderBottom:'4px solid #424242' ,
    },
    deleteIcon:{
        fontSize: '1.8rem',
        '&>span>svg': {

        }
    },
    cartEmpty:{
        textAlign:'center'
    }
}))


function CartRow({ v, classes, updateCart, deleteFromCart}){
    const [quantity, setQuantity] = useState(0)


    const quan = (sign) => {
        let vv = {}
        if (sign === '+' && quantity >= 1 && quantity <= 10) {
            vv[v[0]] = { ...v[1], quantity: v[1].quantity + 1  }
            updateCart(vv)

        } else if (sign === '-' && quantity > 1) {
            vv[v[0]] = { ...v[1], quantity: v[1].quantity - 1 }
            updateCart(vv)
           
        }
    }

    useEffect(()=>{
        
        setQuantity(v[1].quantity)
    }, [v[1].quantity])


    return (
        <TableRow key={v[0]}>
            <TableCell className={classes.cellCss}>
                <img src={v[1].imgAdd} className={classes.cartProductImg}  alt="Product Pic" />
            </TableCell>
            <TableCell className={classes.cellCss} >
                <Typography>
                    {v[1].name}
                </Typography>
            </TableCell>
            <TableCell className={classes.cellCss}>
                <Typography>
                   $ {v[1].price}
                </Typography>
            </TableCell>
            <TableCell className={classes.cellCss}>
                <div className={classes.quantityDiv}>
                    <IconButton className={classes.quantityIconButton} onClick={() => { quan('-') }}>
                        <RemoveIcon className={classes.quantityIcon} />
                    </IconButton>
                    <div className={classes.quantityValue}>
                        {quantity}
                    </div>
                    <IconButton className={classes.quantityIconButton} onClick={() => { quan('+') }}>
                        <AddIcon className={classes.quantityIcon} />
                    </IconButton>
                </div>
            </TableCell>
            <TableCell className={classes.cellCss}>
                <Typography>
                   $ {Number(v[1].price) * v[1].quantity}
                </Typography>
            </TableCell>
            <TableCell className={classes.cellCss}>
                <IconButton className={classes.deleteIconButton} onClick={() => { deleteFromCart(v[0]) }}>
                    <DeleteForeverIcon className={classes.deleteIcon} />
                </IconButton>

            </TableCell>
            {/* <TableCell align="right">{row.calories}</TableCell> */}

        </TableRow>
    )
}


function Cart(){
    const { cart, updateCart, deleteFromCart } = useContext(Context)
    const classes = useStyles();
    

    


    return (
        <Grid container xs={12} sm={12} md={11} lg={11} className={classes.root} style={{ margin: 'auto', marginTop: 50 }} justify="center" >
            <Grid item justify="center" >
                <Typography className={classes.cartHead}>
                        Cart
                </Typography>
            </Grid>
            <Grid item container  >
           { Object.keys(cart).length  ? 
                <>
                        <Grid item xs={11} sm={11} md={8} lg={8} justify="center" style={{margin:'auto'}}>
                    <TableContainer  className={classes.cartTable} component={Paper}>
                        <Table size="small" className={classes.table} aria-label="cart table">
                            <TableHead>
                                <TableRow >
                                    <TableCell className={classes.cellCssHead}>  Image    </TableCell>
                                    <TableCell className={classes.cellCssHead}>  Name    </TableCell>
                                    <TableCell className={classes.cellCssHead}> Price    </TableCell>
                                    <TableCell className={classes.cellCssHead}>  Quantity    </TableCell>
                                    <TableCell className={classes.cellCssHead}>  Total Price   </TableCell>
                                    <TableCell className={classes.cellCssHead}> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.entries(cart).map(v => (
                                    <CartRow v={v} classes={classes} deleteFromCart={deleteFromCart} updateCart={updateCart} />
                                ))}
                                <TableRow>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}  >
                            <Order />
                </Grid>
            </>
            :
               <Grid item justify="center" xs={12} sm={12} md={12} lg={12} >
                    <Typography className={classes.cartEmpty}>
                         Your Cart is Empty
                    </Typography>
                </Grid>
 
            }
            </Grid>
        </Grid>
    )
}


export default Cart;