import React, { useContext} from "react";
import { Card, CardContent, Grid, IconButton, CardMedia,CardActions, Button, Typography  }from '@material-ui/core/'
import { Link } from "react-router-dom"
import { makeStyles, createMuiTheme, fade } from '@material-ui/core/styles';
import { useNavigate } from "react-router";
import {Context} from "../context/store"
import {
    AddShoppingCart as  AddShoppingCartIcon,
    ArrowForwardIos as ArrowForwardIosIcon
} from '@material-ui/icons';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 30,
        paddingBottom: 30,
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cardMainlinksMobile:{
        display:'block',
        fontSize:'2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize:'1.5rem',
        },
    },
    cardMainlinksDesk:{
        display: 'block',
        textAlign:'center',
        width: 'inherit',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    cardContainer:{
        margin:'auto'
    },
    cardMediaImg:{
        maxHeight:200,
        [theme.breakpoints.only('sm')]: {
            maxHeight:140,
        },  
    },
    linkDiv:{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        
        '&:hover':{
            cursor:'pointer',
           boxShadow:theme.shadows[2] ,
        }

    },
    pagelinkName:{
        fontWeight:600,
    },
    productsLink:{
        textDecorationLine:'none',
        color:'inherit',
        display:'inlin-block',
         alignSelf:'center',
        border:'2px solid #424242',
        borderRadius:10,
        paddingTop:5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
         '&:hover':{
             backgroundColor:'#424242',
            color:'white',
         },
        [theme.breakpoints.only('sm')]: {
            fontSize: 16
        },
    },
    cardContent:{
        paddingBottom:10,
        [theme.breakpoints.only('sm')]: {
            padding: 8,
        },
    },
    productName:{
        fontSize:22,
        [theme.breakpoints.only('sm')]: {
            fontSize:16
        },
    },
    price: {
        fontSize: 18,
    },
    cardActions:{
        paddingRight:10,
        paddingLeft: 10,
    },
    cardActionDiv:{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
      
    },
    homeDivHead:{
        display: 'flex',
        width: 'inherit',
        color: '#424242',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },

    },
    arrowButton:{
        padding:'0px 5px 0px 5px',
        '&:hover':{
            backgroundColor:'initial',
        }
    },
    homeDivHeadCheck:{
        margin: 'auto',
               display: 'flex',
        alignItems: 'center',
        cursor:'pointer',
        fontSize:'1.1rem',
        
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
        },
    },
    homeDivHeadLink:{
        textDecorationLine: 'none', color: 'inherit', alignSelf: 'center',
        padding: '7px 2px 7px 8px',
        borderRadius: 5,
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#d3d3d33b',
        },
    }
    
}));


const HomeCards = ({details, title ,classes}) => {
  //  console.log(details)
    const keys = Object.keys(details)
    const values = Object.values(details)
    const naviagate  = useNavigate()
    const navi = (title) => {
        naviagate(title)
    }
    return (
        <Grid container justify="center" className={classes.cardContainer} xs={10} sm={11}  spacing={4} >
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <div className={classes.homeDivHead}>
                <Typography gutterBottom  className={classes.cardMainlinksMobile}> 
                    {title == 'newreleases' && ' New Release '}
                    {title == 'sale' && ' Sale '}
                    {title == 'launch' && ' Launch '}
                </Typography>
                    <Link to={`${title}`}  className={classes.homeDivHeadLink}>
                    <Typography gutterBottom className={classes.homeDivHeadCheck} >
                        <span>Check out More</span>
                         <IconButton className={classes.arrowButton} >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Typography>
                    </Link>
                </div>
            </Grid>            
            { keys.map((v,i)=>(
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
                            <Link to={`${title}/${v}`} className={classes.productsLink}>
                                  Details 
                            </Link>
                                <IconButton onClick={() =>{}}>
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </div>

                        </CardActions>
                    </Card>
                </Grid>
            ))}
            {/* <Grid xs={12} md={3} lg={3} item>
                <div className={classes.linkDiv} onClick={() => navi(title)}>
                <Typography gutterBottom variant="h5" component="h6" className={classes.cardMainlinksDesk}>
                    <div>Check out more</div>
                    
                    <div className={classes.pagelinkName}>
                    {title == 'newreleases' && ' New Release '}
                    {title == 'sale' && ' Sale '}
                    {title == 'launch' && ' Launch '}
                    </div>
                
                </Typography>
                </div>
            </Grid>     */}
        </Grid>
        
    )
}

export default function Home(){
    const { products} = useContext(Context);
   // console.log(products)
    const classes = useStyles()
    const keys = Object.keys(products)
    const values = Object.values(products)
    return (
        <div className={classes.root}>
          
                 {
                    keys.map((v,i)=>(
                        
                            <HomeCards details={values[i]} classes={classes} title={v}  />
                       
                    ))   
                }        
            </div>
    )
}
