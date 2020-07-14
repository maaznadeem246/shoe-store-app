import React from "react";
import { Card, CardContent, Grid, IconButton, CardMedia,CardActions, Button, Typography  }from '@material-ui/core/'
import { Link } from "react-router-dom"
import { makeStyles, createMuiTheme, fade } from '@material-ui/core/styles';
import { useNavigate } from "react-router";
import {
    AddShoppingCart as  AddShoppingCartIcon
} from '@material-ui/icons';


const data ={
    launch:{
        'air-jordan-1-mid-shoe-1':{
            name:'Air Jordan 1 Mid',
            price:'115',
            imgAdd:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg'
        },
        'air-jordan-1-low-shoe-z':{
            name: 'Air Jordan 1 Low',
            price:'90',
            imgAdd:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-483c83ff-0235-4aec-80b3-d30fdc942585/air-jordan-1-low-shoe-z3Tl2VeJ.jpg'
        },
        'air-zoom-type-mens-shoe-P':{
            name:'Nike Air Zoom-Type',
            price:'150',
            imgAdd:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg'
        }
    },
    sale:{
        'react-element-55-se-mens-shoe-m':{
            name:'Nike React Element 55 SE',
            price:'130',
            imgAdd:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a32226fe-8da6-4680-8cf7-f5ccc43057fb/react-element-55-se-mens-shoe-mZPF15.jpg'
        },
        'air-max-tailwind-iv-mens-shoe-f':{
            name:'Nike Air Max Tailwind IV',
            price:'160',
            imgAdd:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/u4piau4adixpf8ux4iqv/air-max-tailwind-iv-mens-shoe-fF5q8X.jpg'
        },
        'air-jordan-1-mid-se-mens-shoe-P':{
            name:'Air Jordan 1 Mid SE',
            price:'125',
            imgAdd:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8db79801-e5a8-4e8b-ba12-fe47d756f3f8/air-jordan-1-mid-se-mens-shoe-P7bjRV.jpg'
        }
    },
    newreleases:{
        'blazer-low-leather-mens-shoe-4':{
            name:'Nike Blazer Low Leather',
            price:'75',
            imgAdd:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5369b128-1616-4086-8322-af84f96cf69f/blazer-low-leather-mens-shoe-4KCkNr.jpg'
        },
        'venture-runner-mens-shoe-H':{
            name:'Nike Venture Runner',
            price:'70',
            imgAdd:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/30e7219a-1965-42d0-a8fb-17cb377dcfd6/venture-runner-mens-shoe-HHcvdw.jpg'
        },
        'dbreak-sp-mens-shoe-t':{
            name:'Nike DBreak SP',
            price:'110',
            imgAdd:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/df22108f-69d0-4c73-955d-ae704bd5f489/dbreak-sp-mens-shoe-tH1C69.jpg',
        }
    }


}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 60,
        paddingBottom: 30,
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cardMainlinksMobile:{
        display:'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
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
         }
    },
    cardContent:{
        paddingBottom:10,
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
      
    }
    
}));


const HomeCards = ({details, title ,classes}) => {
    const keys = Object.keys(details)
    const values = Object.values(details)
    const naviagate  = useNavigate()
    const navi = (title) => {
        naviagate(title)
    }
    return (
        <Grid container justify="center" className={classes.cardContainer} xs={10}  spacing={4} >
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <Typography gutterBottom variant="h5" component="h2" className={classes.cardMainlinksMobile}> 
                    {title == 'newreleases' && ' New Release '}
                    {title == 'sale' && ' Sale '}
                    {title == 'launch' && ' Launch '}
                </Typography>
            </Grid>            
            { keys.map((v,i)=>(
                <Grid xs={12} sm={4} md={3} lg={3} item >
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
            <Grid xs={12} md={3} lg={3} item>
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
            </Grid>    
        </Grid>
        
    )
}

export default function Home(){
    
    const classes = useStyles()
    const keys = Object.keys(data)
    const values = Object.values(data)
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
