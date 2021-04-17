import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { authContext } from "./context/Auth";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    // backgroundColor: "#eeb7ba",
  },
  basic: {
    backgroundColor: "#fff",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: "bolder",
    // textTransform: "uppercase",
    color: "black",
    letterSpacing: ".25em",
    // position: 'fixed',
  },
  button: {
    backgroundColor: "#eeb7ba",
    padding: theme.spacing(1, 2),
    textTransform: "none",
    color: "white",
    fontWeight: "bolder",
    boxShadow: "5px",
    textDecoration: "none",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    fontFamily: "Lobster, cursive",
   
    fontSize: "30px",
    letterSpacing: ".05em",
    // fontWeight: "bolder",
    // textTransform: "uppercase",
    color: "black",
    // letterSpacing: ".25em",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  menu: {
    padding: theme.spacing(2, 2),
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: "bolder",
    textTransform: "uppercase",
    color: "black",
    letterSpacing: ".25em",
    cursor: "pointer",
    textDecoration: "none",
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    height: "64px",
    width: "64px",
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [tokenState, setTokenState] = React.useState(null);

  const auth = React.useContext(authContext).state;
  // console.log({ auth: auth.loggedIn });

  React.useEffect(() => {
    var temp = localStorage.getItem("token");
    setTokenState(temp);
  }, [tokenState]);

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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/patientsignup" className={classes.menu}>
          Patient Signup
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/patientlogin" className={classes.menu}>
          Patient Login
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/doctorsignup" className={classes.menu}>
          Doctor Signup
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/doctorlogin" className={classes.menu}>
          Doctor Login
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="/features" className={classes.menu}>
          features
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link to="/aitools" className={classes.menu}>
          AI tools
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <div className={classes.grow}>
        {auth.loggedIn ? (
          <AppBar position="static" className={classes.basic}>
            <Toolbar>
              <IconButton
                edge="start"
                // className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <Link to="/" style={{textDecoration: 'none'}}>
                <img src="./logofinal.png" alt="logo" className={classes.logo}></img>
                </Link>
              
              </IconButton>
              <Link to="/" style={{textDecoration: 'none'}}>
              <Typography className={classes.title} variant="h6" noWrap>
                Elegance
              </Typography>
              </Link>
              

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Link to="/features" className={classes.menu}>
                  features
                </Link>
                <Link to="/aitools" className={classes.menu}>
                  AI tools
                </Link>
                <Link to="/logout" className={classes.menu}>
                  Logout
                </Link>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        ) : (
          <AppBar position="static" className={classes.basic}>
            <Toolbar>
              <IconButton
                edge="start"
                // className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <Link to="/" style={{textDecoration: 'none'}}>
                <img src="./logofinal.png" alt="logo" className={classes.logo}></img>
                </Link>
              </IconButton>
              <Link to="/" style={{textDecoration: 'none'}}>
              <Typography className={classes.title} variant="h6" noWrap>
                Elegance
              </Typography>
              </Link>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Link to="/patientsignup" className={classes.menu}>
                  Patient Signup
                </Link>
                <Link to="/patientlogin" className={classes.menu}>
                  Patient Login
                </Link>
                <Link to="/doctorsignup" className={classes.menu}>
                  Doctor Signup
                </Link>
                <Link to="/doctorlogin" className={classes.menu}>
                  Doctor Login
                </Link>
                <Link to="/features" className={classes.menu}>
                  features
                </Link>
                <Link to="/aitools" className={classes.menu}>
                  AI tools
                </Link>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        )}
        {renderMobileMenu}
        {renderMenu}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
