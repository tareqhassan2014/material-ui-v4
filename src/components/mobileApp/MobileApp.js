import {
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import mobileAppsIcon from "../../assets/mobileIcon.svg";

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

const MobileApp = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid
            container
            justifyContent={mobileView ? "center" : "flex-end"}
            className={classes.serviceContainer}
        >
            <Grid
                item
                style={{
                    textAlign: mobileView ? "center" : undefined,
                }}
            >
                <Typography variant="h4">
                    iOS/Android App Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Extend Functionality. Extend Access. Increase Engagement.
                </Typography>
                <Typography variant="subtitle1">
                    Integrate your web experience or create a standalone app
                    {mobileView ? null : <br />}with either mobile platform.
                </Typography>
                <Button
                    component={Link}
                    to="/mobileApps"
                    variant="outlined"
                    className={classes.learnButton}
                    endIcon={<ArrowRightAltIcon />}
                >
                    Learn More
                </Button>
            </Grid>
            <Grid item style={{ marginRight: mobileView ? 0 : "5em" }}>
                <img
                    className={classes.icon}
                    alt="mobile phone icon"
                    src={mobileAppsIcon}
                />
            </Grid>
        </Grid>
    );
};

export default MobileApp;
