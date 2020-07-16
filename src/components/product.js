import React, {useContext} from "react"
import { useParams } from 'react-router-dom';
import { Context } from "../context/store";
import { Card, CardContent, Grid, IconButton, CardMedia, CardActions, Button, Typography } from '@material-ui/core/'
import { makeStyles} from '@material-ui/core/styles';
import {
     Add  as AddIcon,
     Remove as RemoveIcon
        } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root:{
        color:'#424242'
    },
    productImg:{
        width: 500,
        height: 500,
        borderRadius:7,
        boxShadow:theme.shadows[5]
    },
    productImgdiv:{
        textAlign:'center'
    },
    productPrice:{
        ...theme.typography.h6,
        marginTop: 8,
        marginbottom: 8,
        color:'initial',
        fontSize:25,
        
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
        
       
    },
    productData:{
        display:'flex',
        flexDirection:'column',
        justifyContent:"center"
    },
    priceandquantitydiv:{
        display:'flex',
    }

}))


function Product(){
    const classes = useStyles()
    let { productId} = useParams();
    const { getProduct } = useContext(Context);
    const product = getProduct(productId)
 
    return (
        <Grid container xs={11} sm={11} md={10} lg={10} className={classes.root} style={{ margin: 'auto', marginTop:20}} justify="center" >

            <Grid item xs={12} sm={12} md={7} lg={7} >
                <div className={classes.productImgdiv}>
                    <img src={product.imgAdd} className={classes.productImg} />
                </div>     
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} style={{margin:'auto'}}>    
                <div className={classes.productData}>
                    <Typography className={classes.productName}>
                        {product.name}
                    </Typography>
                        <div className={classes.priceandquantitydiv}>
                        <Typography className={classes.productPrice}>
                            <div className={classes.productPriceText}>${product.price}</div>
                        </Typography>
                        <div></div>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default Product;