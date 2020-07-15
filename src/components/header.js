import React from "react"
import {Link} from "react-router-dom"
import { makeStyles, createMuiTheme, fade } from '@material-ui/core/styles';
import { AppBar, 
        Toolbar, 
        Typography, 
        ThemeProvider,
        Switch,
        FormControlLabel,
        FormGroup,
        Badge,
        InputBase, 
        MenuItem,
        IconButton,
        Menu
    } from '@material-ui/core';
import { Search as SearchIcon, 
        AccountCircle, Mail as MailIcon , 
        Notifications as NotificationsIcon, 
        MoreVert as MoreIcon,
        Menu as MenuIcon,
        ShoppingCart,
        ClassSharp,
        Close as CloseIcon 
    } from '@material-ui/icons';





const theme = createMuiTheme({
   
});    


const useStyles = makeStyles((theme) => ({
    header:{
        backgroundColor:'#fafafa',
        color: '#424242'
    },

    headerToolbar:{
        display: 'flex',
        justifyContent: 'space-around',
    },
    headerLinkText:{
        display:'inline-block',
        color:'#424242',
        paddingRight:10,
        paddingLeft:10,
        fontSize:18,
        borderBottom: `1px solid transparent`,
        '&:hover':{
          borderBottom: `1px solid #424242`
        },
        '&:active': {

        }
    
    },
    headerLinks:{
      [theme.breakpoints.down('xs')]: {
        display:'none'
      },  
    },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mobileMen:{
    position:'fixed',
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    zIndex: 1200,
    textAlign:'center'
  },
  mobileHeaderLinkText:{
    fontSize:23,
    paddingTop:10,
    paddingBottom:10,
    color: '#424242',

  },
  mobileLinks:{
    textDecoration: 'none',
    paddingTop:10,
    paddingBottom:10,
  },
  mobilelinkDiv:{
    height:'100%',
    paddginTop:'10%',
  },
  closeButton:{
    textAlign: 'right',
    padding:20,
  },
  title: {
   

    [theme.breakpoints.up('sm')]: {
    
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionCartHam:{
    display:'flex',
  },
  ham:{
    display:'none',

    [theme.breakpoints.down('xs')]: {
      display:'block'
    },
  },
  sectionDesktop: {
    // display: 'none',
    display: 'flex',

    [theme.breakpoints.up('sm')]: {
      
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  headerBack:{
   height: 60, width: '100%',
    [theme.breakpoints.down('xs')]: {
      height: 40,
    },
  }

}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
   <div className={classes.mobileMen}>
          <div className={classes.closeButton}>
            <IconButton onClick={() => handleMobileMenuClose()}>
                <CloseIcon />
            </IconButton>
          </div>
          <div className={classes.mobilelinkDiv}>
        <Link to="/" className={classes.mobileLinks} onClick={() => handleMobileMenuClose()}>
                <Typography className={classes.mobileHeaderLinkText} >
                    Home
                </Typography>
              </Link>                

            <Link to="/launch" className={classes.mobileLinks} onClick={() => handleMobileMenuClose()}>
              <Typography className={classes.mobileHeaderLinkText} >
                Launch
                      </Typography>
            </Link>

              <Link to="/newreleases" className={classes.mobileLinks} onClick={() => handleMobileMenuClose()}>
                  <Typography className={classes.mobileHeaderLinkText} >
                    New Releases
                  </Typography>
              </Link>
       
      <Link to="/sale" className={classes.mobileLinks} onClick={() => handleMobileMenuClose()}>
                <Typography className={classes.mobileHeaderLinkText} >
                  Sale
                </Typography>
            </Link>
      </div>
   {/* <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu> */}
    </div>
  );

  return (
      <ThemeProvider theme={theme}>
      {isMobileMenuOpen && renderMobileMenu}
    <div className={classes.grow}>
        <div className={classes.headerBack}></div>
      <AppBar  className={classes.header} position="fixed">
        <Toolbar className={classes.headerToolbar}>
            <Link to="/" style={{textDecorationLine:'none', color:'inherit'}}>
              <Typography className={classes.title} variant="h6" noWrap>
                Shoe Store
             </Typography>
            </Link> 
          

          <div className={classes.headerLinks}>
          
                <Link to="/launch">
                  <Typography className={classes.headerLinkText} >
                    Launch
                </Typography>
                </Link> 
            <Link to="/newreleases">
                <Typography className={classes.headerLinkText} >
                        New Releases
                </Typography>
            </Link>
            <Link to="/sale">
                <Typography className={classes.headerLinkText}>
                    Sale
                </Typography>
            </Link>
          </div>

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <div className={classes.sectionCartHam}>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>
            {/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </div>
          <div className={classes.ham}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                  onClick={(e) => handleMobileMenuOpen(e)}
              >
                <MenuIcon />
              </IconButton>
          </div>
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
    </ThemeProvider>
  );
}




