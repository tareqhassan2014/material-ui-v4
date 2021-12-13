import React, { useEffect, useState } from "react";
import {
    AppBar,
    Button,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Toolbar,
    useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
    },
    logo: {
        height: "7em",
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
}));

const Header = () => {
    const classes = useStyles();
    //menu index state value
    const [menuIndex, setMenuIndex] = useState(0);
    //service dropdown selected state value
    const [serviceIndex, setServiceIndex] = useState(0);
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

    const routes = [
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
    ];

    const serviceOptions = [
        { name: "Service", link: "/services", menuIndex: 1, serviceIndex: 0 },
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
    ];

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

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
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
                        <Tabs
                            value={menuIndex}
                            onChange={handleMenuItemClick}
                            className={classes.tabContainer}
                            indicatorColor="primary"
                        >
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/"
                                label="home"
                            />
                            <Tab
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? true : undefined}
                                className={classes.tab}
                                component={Link}
                                to="/services"
                                label="services"
                                onMouseOver={(e) => handelOpenDropdown(e)}
                            />
                            <Tab
                                className={classes.tab}
                                label="the revolution"
                                component={Link}
                                to="/revolution"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/about"
                                label="about us"
                            />
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to="/contact"
                                label="contact us"
                            />
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
                                    selected={
                                        index === serviceIndex &&
                                        menuIndex === 1
                                    }
                                >
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin} />
        </>
    );
};

export default Header;
