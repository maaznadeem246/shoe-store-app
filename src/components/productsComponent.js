import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, IconButton, CardMedia, CardActions, Typography } from '@material-ui/core'
import { Link } from "react-router-dom"
import { Context } from "../context/store";
import {
    AddShoppingCart as AddShoppingCartIcon,
} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 50,
        paddingBottom: 30,
    },
    cardContainer: {
        margin: 'auto'
    },
    cardMainlinksMobile: {
        display: 'block',
        fontSize: '2rem',
        textAlign: 'center',
        color:'#424242',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
        },
    },
    cardMediaImg: {
        maxHeight: 200,
        [theme.breakpoints.only('sm')]: {
            maxHeight: 140,
        },
    },
    cardContent: {
        paddingBottom: 10,
        [theme.breakpoints.only('sm')]: {
            padding: 8,
        },
    },
    productName: {
        fontSize: 22,
        [theme.breakpoints.only('sm')]: {
            fontSize: 16
        },
    },
    price: {
        fontSize: 18,
    },
    cardActions: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    cardActionDiv: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',

    },
    productsLink: {
        textDecorationLine: 'none',
        color: 'inherit',
        display: 'inlin-block',
        alignSelf: 'center',
        border: '2px solid #424242',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        '&:hover': {
            backgroundColor: '#424242',
            color: 'white',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16
        },
    },
}));


function  ProductsComponent({p, title, urlTitle}){
    const keys = Object.keys(p)
    const values = Object.values(p)
    const classes = useStyles()
    const { addProdcutToCart } = useContext(Context)

    const addToCart = (k, v) => {
        let d = {}
        d[k] = { ...v, quantity: 1 }
        
        addProdcutToCart(d)
    }

    return (
        <div className={classes.root}>

            <Grid container justify="center" className={classes.cardContainer} xs={10} sm={11} spacing={4} >
                <Grid item justify="center" xs={12} sm={12} md={12} lg={12} >
                    <Typography gutterBottom className={classes.cardMainlinksMobile}>
                        Our New {title}
                    </Typography>
                </Grid>
                {keys.map((v, i) => (
                    <Grid xs={12} sm={3} md={3} lg={3} item >
                        <Card>
                            <CardMedia
                                component="img"
                                className={classes.cardMediaImg}
                                src={values[i].imgAdd}
                                title="Paella dish"
                            />
                            <CardContent className={classes.cardContent}>

                                <Typography className={classes.productName} >
                                    {values[i].name}
                                </Typography>

                                <Typography className={classes.price} >
                                    $ {values[i].price}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <div className={classes.cardActionDiv}>
                                    <Link to={`${v}`} className={classes.productsLink}>
                                        {/* */}
                                        Details
                            </Link>
                                    <IconButton onClick={() => { addToCart(v,values[i]) }}>
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                </div>

                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default ProductsComponent;