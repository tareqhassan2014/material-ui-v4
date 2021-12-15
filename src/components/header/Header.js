import {
    AppBar,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText, Menu,
    MenuItem,
    SwipeableDrawer, Tab,
    Tabs, Toolbar,
    useMediaQuery,
    useScrollTrigger
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/styles";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function ElevationScroll({ children }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme) => ({
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.5em",
        },
    },
    logo: {
        height: "7em",
        [theme.breakpoints.down("md")]: {
            height: "6em",
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em",
        },
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        fontSize: "1rem",
    },
    logoButton: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px",
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1,
        },
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
    },
    drawer: {
        backgroundColor: theme.palette.common.blue,
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1,
        },
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7,
        "&:hover": {
            opacity: 1,
        },
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange,
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    //menu index state value
    const [menuIndex, setMenuIndex] = useState(0);
    //service dropdown selected state value
    const [serviceIndex, setServiceIndex] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const largeDevice = useMediaQuery(theme.breakpoints.up("lg"));
    const [openDropdown, setOpenMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuItemClick = (e, index) => {
        setMenuIndex(index);
    };

    const HandelCloseDropdown = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const handelOpenDropdown = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };

    const routes = useMemo(()=> [
        { name: "Home", link: "/", menuIndex: 0 },
        {
            name: "Services",
            link: "/services",
            menuIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: (event) => handelOpenDropdown(event),
        },
        { name: "The Revolution", link: "/revolution", menuIndex: 2 },
        { name: "About Us", link: "/about", menuIndex: 3 },
        { name: "Contact Us", link: "/contact", menuIndex: 4 },
    ],[anchorEl]);

    const serviceOptions = useMemo( () =>[
        { name: "Services", link: "/services", menuIndex: 1, serviceIndex: 0 },
        {
            name: "Custom Software Development",
            link: "/customSoftware",
            menuIndex: 1,
            serviceIndex: 1,
        },
        {
            name: "iOS/Android App Development",
            link: "/mobileApps",
            menuIndex: 1,
            serviceIndex: 2,
        },
        {
            name: "Website Development",
            link: "/websites",
            menuIndex: 1,
            serviceIndex: 3,
        },
    ],[])

    useEffect(() => {
        [...serviceOptions, ...routes].forEach((route) => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    route.menuIndex !== menuIndex &&
                        setMenuIndex(route.menuIndex);
                    route.serviceIndex &&
                        route.serviceIndex !== serviceIndex &&
                        setServiceIndex(route.serviceIndex);
                    break;

                default:
                    break;
            }
        });
    }, [menuIndex, routes, serviceIndex, serviceOptions]);

    const tabs = (
        <React.Fragment>
            <Tabs
                value={menuIndex}
                onChange={handleMenuItemClick}
                className={classes.tabContainer}
                indicatorColor="primary"
            >
                {routes.map((route, index) => (
                    <Tab
                        key={index}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver}
                    />
                ))}
            </Tabs>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
            >
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openDropdown}
                onClose={HandelCloseDropdown}
                classes={{ paper: classes.menu }}
                MenuListProps={{
                    onMouseLeave: HandelCloseDropdown,
                }}
                elevation={0}
                style={{ zIndex: 1302 }}
                keepMounted
            >
                {serviceOptions.map((option, index) => (
                    <MenuItem
                        component={Link}
                        to={option.link}
                        key={index}
                        onClick={() => {
                            HandelCloseDropdown();
                            setMenuIndex(option.menuIndex);
                            setServiceIndex(index);
                        }}
                        classes={{ root: classes.menuItem }}
                        selected={index === serviceIndex && menuIndex === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolBarMargin} />
                <List>
                    {routes.map((route) => (
                        <ListItem
                            button
                            divider
                            key={route.menuIndex}
                            component={Link}
                            to={route.link}
                            selected={route.menuIndex === menuIndex}
                            classes={{ selected: classes.drawerItemSelected }}
                            onClick={() => {
                                setOpenDrawer(false);
                                setMenuIndex(route.menuIndex);
                            }}
                        >
                            <ListItemText className={classes.drawerItem}>
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem
                        button
                        divider
                        component={Link}
                        to="/estimate"
                        selected={menuIndex === 5}
                        classes={{
                            root: classes.drawerItemEstimate,
                            selected: classes.drawerItemSelected,
                        }}
                        onClick={() => {
                            setOpenDrawer(false);
                            setMenuIndex(5);
                        }}
                    >
                        <ListItemText className={classes.drawerItem}>
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoButton}
                            component={Link}
                            to="/"
                            onClick={() => setMenuIndex(0)}
                            disableRipple
                        >
                            <img
                                src={logo}
                                className={classes.logo}
                                alt="company logo"
                            />
                        </Button>
                        {largeDevice ? tabs : drawer}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin} />
        </React.Fragment>
    );
};

export default Header;
