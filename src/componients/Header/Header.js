import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Logo from "../assets/images/logoheader.png";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import {
  Box,
  ClickAwayListener,
  Drawer,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    // ...theme.mixins.toolbar,
    marginBottom: "0em",
  },

  logo: {
    width: "200px",
  },
  tabcontainer: {
    margin: "auto",
  },
  tab: {
    ...theme.Typography.tab,
    minWidth: 20,
    marginLeft: "25px",
  },
  link: {
    textDecoration: "none",
    padding: "5px 10px",
    fontSize: "16px",
    color: "#000",
  },
  // button: {
  //   ...theme.Typography.estimate,
  //   borderRadius: "100px !important",
  //   marginLeft: "50px",
  //   marginRight: "25px",
  //   height: "45px",
  //   padding: "20px 30px",
  // },
}));
export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  // const [anchoreEl, setAnchoreEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const anchorRef = React.useRef(null);

  const handlerChange = (e, value) => {
    setValue(value);
  };

  // const handlerOpen = (e) => {
  //   setAnchoreEl(e.currentTarget);
  //   setOpen(true);
  // };
  // const handlerClose = () => {
  //   setAnchoreEl(false);
  //   setOpen(false);
  // };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      Home About Services Contact
    </Box>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const MySwal = withReactContent(Swal);

  function showMessage() {
  
    MySwal.fire({
      title: "Welcome to Houseparty",
      text: "Better Food, Better Coffee",
      imageUrl:
        "https://cdn.dribbble.com/users/1048574/screenshots/3553221/housepartyanim2.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Logo",
    });
  }
 
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="secondary">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <img src={Logo} alt="company logo" className={classes.logo} />

            <Tabs
              value={value}
              onChange={handlerChange}
              className={classes.tabcontainer}
              indicatorColor="primary"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us "
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/portfolio"
                label="Portfolio "
              />
              <Tab
                ref={anchorRef}
                className={classes.tab}
                onMouseEnter={() => setOpen(true)}
                onClick={handleToggle}
                component={Link}
                to="/service"
                label="Service"
              />

              <Tab
                className={classes.tab}
                component={Link}
                to="/faqs"
                label="FAQ'S"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>

            <Button
              variant="contained"
              color="primary"
              // className={classes.button}
              sx={{
                display: { xs: "none", md: "flex" },
                borderRadius: "20px",
                backgroundColor: "#D61355",
              }}
              onClick={showMessage}
            >
              Get Started
            </Button>

            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <MenuRoundedIcon />
            </IconButton>

            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        // onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link to="/service/anroid" className={classes.link}>
                            Graphic Designer
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/service/web" className={classes.link}>
                            Website Development
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/service/apps" className={classes.link}>
                            Product Designer
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/service/apps" className={classes.link}>
                            Blog Writing
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/service/apps" className={classes.link}>
                            Digital Marketing
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link to="/service/apps" className={classes.link}>
                            App Development
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div className={classes.toolbarMargin} />
      <Drawer
        anchor="right"
        open={drawerOpen}
        PaperProps={{
          style: {
            backgroundColor: "#D61355",
          },
        }}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}
