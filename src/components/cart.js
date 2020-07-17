import React, { useContext, useState} from "react"
import { Context } from "../context/store"
import {
    Add as AddIcon,
    Remove as RemoveIcon,
    AddShoppingCart as AddShoppingCartIcon,
} from '@material-ui/icons';

import { 
    Grid, 
    IconButton, 
    CardMedia, 
    CardContent, 
    CardActions,
    Button, 
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
    },
    cartProductImg:{
        width:50,
        height:50
    },
    cartTable:{
        padding: 20,
    },
    quantityDiv: {
        display: 'flex',
        padding: 20,
        [theme.breakpoints.down('md')]: {

        }
    },
    quantityIconButton: {
        border: '2px solid #424242',
        paddingTop: 0,
        paddingBottom: 0,
        height: 50,
        borderRadius: 8,
        color: '#424242',
        '&:hover': {
            backgroundColor: '#424242',
            color: 'white',
        },
        [theme.breakpoints.down('md')]: {
            height: 40,
        }
    },
    quantityIcon: {
        fontSize: '1.8rem',
    },
    quantityValue: {
        fontSize: 35,
        alignSelf: 'center',
        color: '#424242',
        padding: "0px 20px 0px 20px",
        [theme.breakpoints.down('md')]: {
            fontSize: 24,
        },
    },
}))


function Cart(){
    const { cart } = useContext(Context)
    const classes = useStyles();
    console.log(cart)
    const [quantity, setQuantity] = useState(1)


    const quan = (sign) => {

        if (sign == '+' && quantity >= 1 && quantity <= 10) {

            setQuantity(quantity + 1)

        } else if (sign == '-' && quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    // useEffect(()=>{
    //     let v = 
    //     setQuantity()
    // },[cart])

    return (
        <Grid container xs={11} sm={11} md={10} lg={10} className={classes.root} style={{ margin: 'auto', marginTop: 50 }} justify="center" >
            <Grid item justify="center" >
                <Typography className={classes.cartHead}>
                        Cart
                </Typography>
            </Grid>
            <Grid item  container  >
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <TableContainer className={classes.cartTable} component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.entries(cart).map(v => (
                                    <TableRow key={v[0]}>
                                        <TableCell >
                                            <img src={v[1].imgAdd} className={classes.cartProductImg} />
                                        </TableCell>
                                        <TableCell >
                                            <Typography>
                                                {v[1].name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <div className={classes.quantityDiv}>
                                                <IconButton className={classes.quantityIconButton} onClick={() => { quan('-') }}>
                                                    <RemoveIcon className={classes.quantityIcon} />
                                                </IconButton>
                                                <div className={classes.quantityValue}>
                                                    {v[1].quantity}
                                                </div>
                                                <IconButton className={classes.quantityIconButton} onClick={() => { quan('+') }}>
                                                    <AddIcon className={classes.quantityIcon} />
                                                </IconButton>
                                            </div>
                                        </TableCell>
                                        {/* <TableCell align="right">{row.calories}</TableCell> */}

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>

                </Grid>
            </Grid>
        </Grid>
    )
}


export default Cart;