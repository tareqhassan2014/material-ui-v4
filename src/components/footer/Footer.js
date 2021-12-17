import { Grid, Hidden, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import footerAdornment from "../../assets/Footer Adornment.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative",
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em",
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em",
        },
    },
    mainContainer: {
        position: "absolute",
        zIndex: 1303,
    },
    link: {
        color: "white",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none",
    },
    gridItem: {
        margin: "3em",
    },
    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em",
        },
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em",
        },
    },
}));

const Footer = ({ setMenuIndex, serviceIndex, setServiceIndex, menuIndex }) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid
                    container
                    justifyContent="center"
                    className={classes.mainContainer}
                >
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column">
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/"
                                onClick={() => setMenuIndex(0)}
                            >
                                home
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/services"
                                onClick={() => setMenuIndex(1)}
                            >
                                service
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/customSoftware"
                                onClick={() => setMenuIndex(1)}
                            >
                                custom software development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/mobileApps"
                                onClick={() => setMenuIndex(1)}
                            >
                                mobile app development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/website"
                                onClick={() => setMenuIndex(1)}
                            >
                                website development
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/revulsion"
                            >
                                The revulsion
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/vision"
                            >
                                vision
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/tecnology"
                            >
                                tecnology
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/process"
                            >
                                process
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/about"
                                onClick={() => setMenuIndex(3)}
                            >
                                About us
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/history"
                            >
                                history
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/team"
                            >
                                team
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/contact"
                                onClick={() => setMenuIndex(4)}
                            >
                                contact US
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img
                src={footerAdornment}
                alt="black declarative slash"
                className={classes.adornment}
            />
            <Grid
                container
                justifyContent="flex-end"
                spacing={2}
                className={classes.socialContainer}
            >
                <Grid
                    item
                    component={"a"}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferre"
                >
                    <img
                        src={facebook}
                        alt="facebook logo"
                        className={classes.icon}
                    />
                </Grid>
                <Grid
                    item
                    component={"a"}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferre"
                >
                    <img
                        src={twitter}
                        alt="twitter logo"
                        className={classes.icon}
                    />
                </Grid>
                <Grid
                    item
                    component={"a"}
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferre"
                >
                    <img
                        src={instagram}
                        alt="instagram logo"
                        className={classes.icon}
                    />
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;
