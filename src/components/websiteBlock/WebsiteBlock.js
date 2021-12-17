import {
    Button,
    Grid,
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { Link } from "react-router-dom";
import websitesIcon from "../../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
        },
    },
    subtitle: {
        marginBottom: "1em",
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        width: 110,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em",
        },
    },
}));

const WebsiteBlock = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid
            container
            direction="row"
            justify={mobileView ? "center" : undefined}
            className={classes.serviceContainer}
        >
            <Grid
                item
                style={{
                    marginLeft: mobileView ? 0 : "5em",
                    textAlign: mobileView ? "center" : undefined,
                }}
            >
                <Typography variant="h4">Website Development</Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Reach More. Discover More. Sell More.
                </Typography>
                <Typography variant="subtitle1">
                    Optimized for Search Engines, built for speed.
                </Typography>
                <Button
                    component={Link}
                    to="/websites"
                    variant="outlined"
                    className={classes.learnButton}
                    endIcon={<ArrowRightAltIcon />}
                >
                    Learn More
                </Button>
            </Grid>
            <Grid item>
                <img
                    className={classes.icon}
                    alt="website icon"
                    src={websitesIcon}
                />
            </Grid>
        </Grid>
    );
};

export default WebsiteBlock;
