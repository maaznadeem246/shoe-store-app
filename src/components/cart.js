import React, { useContext, useState} from "react"
import { Context } from "../context/store"
import {
    Add as AddIcon,
    Remove as RemoveIcon,
    DeleteForever as DeleteForeverIcon,
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
import { borderBottom } from "@material-ui/system";

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
        color: '#424242',
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
    }
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
                                    <TableRow key={v[0]}>
                                        <TableCell className={classes.cellCss}>
                                            <img src={v[1].imgAdd} className={classes.cartProductImg} />
                                        </TableCell>
                                        <TableCell className={classes.cellCss} >
                                            <Typography>
                                                {v[1].name}
                                            </Typography>
                                        </TableCell>
                                        <TableCell className={classes.cellCss}>
                                            <Typography>
                                                {v[1].price}
                                            </Typography>
                                        </TableCell>
                                        <TableCell className={classes.cellCss}>
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
                                        <TableCell className={classes.cellCss}>
                                            <Typography>
                                                {Number(v[1].price) * v[1].quantity}
                                            </Typography>
                                        </TableCell>
                                        <TableCell className={classes.cellCss}>
                                            <IconButton className={classes.deleteIconButton} onClick={()=>{ }}>
                                                <DeleteForeverIcon className={classes.deleteIcon} />
                                            </IconButton>
                                                
                                        </TableCell>
                                        {/* <TableCell align="right">{row.calories}</TableCell> */}

                                    </TableRow>
                                ))}
                                <TableRow>

                                </TableRow>
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