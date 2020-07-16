import React, { useContext, useState} from "react"
import { useParams } from 'react-router-dom';
import { Context } from "../context/store";
import { Card, CardContent, Grid, IconButton, CardMedia, CardActions, Button, Typography } from '@material-ui/core/'
import { makeStyles} from '@material-ui/core/styles';
import {
     Add  as AddIcon,
     Remove as RemoveIcon,
    AddShoppingCart as AddShoppingCartIcon,
        } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root:{
        color:'#424242'
    },
    productImg:{
        width: 500,
        height: 500,
        borderRadius:7,
        boxShadow:theme.shadows[5],
        [theme.breakpoints.only('md')]: {
            width: 450,
            height: 450,
        },
        [theme.breakpoints.down('md')]: {
        width: 300,
        height: 300,
        },
        [theme.breakpoints.only('xs')]: {
        width: '80%',
        height: 350,
        },
        '@media (max-width: 320px) and (min-width: 0px)':{
            height: 250, 
        }
    },
    productImgdiv:{
        textAlign:'center'
    },
    productPrice:{
        ...theme.typography.h6,
       
        color:'initial',
        fontSize:23,
        padding:20,
       [theme.breakpoints.down('md')]: {
           fontSize: 18,
           padding: 20,
        }
    },
    productPriceText:{
        borderRadius: 8,
        display: 'inline-block',
        backgroundColor: '#424242',
        color: 'white',
        padding: '7px 10px 7px 10px',
        boxShadow:theme.shadows[10],
       
    },
    productName:{
       ...theme.typography.h4,
        marginTop: 8,
        marginbottom: 8,
        padding: 20,
        [theme.breakpoints.down('md')]: {
            ...theme.typography.h5,
            
        }
    },
    productData:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"center",
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',

        }
    },
    priceandquantitydiv:{
        display:'flex',

        
    },

    quantityDiv:{
        display:'flex',
        padding: 20,
        [theme.breakpoints.down('md')]: {
         
        }
    },
    quantityIcon:{
        fontSize:'1.8rem',
    },
    quantityValue:{
        fontSize: 35,
        alignSelf: 'center',
        color:'#424242',
        padding:"0px 20px 0px 20px",
        [theme.breakpoints.down('md')]: {
           fontSize:24,
        },
    },
    quantityIconButton:{
        border:'2px solid #424242',
        paddingTop:0,
        paddingBottom: 0,
        height:50,
        borderRadius:8,
        color: '#424242',
        '&:hover':{
            backgroundColor:'#424242',
            color:'white',
        },
        [theme.breakpoints.down('md')]: {
            height: 40,
        }
    },
    addToCartButton:{
        borderRadius:10,
        border:'2px solid #424242',
        paddingRight:20,
        paddingLeft:20,
        color: '#424242',
        '&:hover':{
            backgroundColor:'#424242',
            color:'white'
        },
        [theme.breakpoints.down('md')]: {
            paddingTop:8,
            paddingBottom: 8,
          }   
    },
    addToCartDiv:{
        padding:20,
        
    },
    addToCartText:{
        fontSize:20,
        paddingRight:10,
        [theme.breakpoints.down('md')]: {
            fontSize: 18,
        }
    }

}))


function Product(){
    const classes = useStyles()
    let { productId} = useParams();
    const { getProduct } = useContext(Context);
    const product = getProduct(productId)
    const [quantity,setQuantity] = useState(1)
    const quan = () => {

    }
    return (
        <Grid container xs={11} sm={11} md={10} lg={10} className={classes.root} style={{ margin: 'auto', marginTop:20}} justify="center" >

            <Grid item xs={12} sm={7} md={7} lg={7} >
                <div className={classes.productImgdiv}>
                    <img src={product.imgAdd} className={classes.productImg} />
                </div>     
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5} style={{margin:'auto'}}>    
                <div className={classes.productData}>
                    <Typography className={classes.productName}>
                        {product.name}
                    </Typography>
                        <div className={classes.priceandquantitydiv}>
                            <Typography className={classes.productPrice}>
                                <div className={classes.productPriceText}>${product.price}</div>
                            </Typography>
                            <div className={classes.quantityDiv}>
                                    <IconButton className={classes.quantityIconButton} onClick={() => { }}>
                                        <RemoveIcon className={classes.quantityIcon}  />
                                    </IconButton>
                                    <div className={classes.quantityValue}>
                                        {quantity}
                                    </div>
                                    <IconButton className={classes.quantityIconButton} onClick={() => { }}>
                                            <AddIcon className={classes.quantityIcon} />
                                    </IconButton>
                            </div>
                       
                    </div>
                    <div className={classes.addToCartDiv}>
                        <IconButton className={classes.addToCartButton} aria-label="add to shopping cart">
                            <span className={classes.addToCartText}>Add to Cart</span>  <AddShoppingCartIcon />
                        </IconButton>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Product;