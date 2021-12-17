import {
    Button,
    Grid,
    makeStyles,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useTheme } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";

const useStyles = makeStyles((theme) => ({
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
        },
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
    subtitle: {
        marginBottom: "1em",
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
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

const CustomSoftware = () => {
    const theme = useTheme();
    const smallDevice = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();

    return (
        <Grid
            container
            justifyContent={smallDevice ? "center" : "fex-end"}
            className={classes.serviceContainer}
        >
            <Grid
                item
                style={{
                    marginLeft: smallDevice ? 0 : "5em",
                    textAlign: smallDevice ? "center" : undefined,
                }}
            >
                <Typography variant="h4">
                    Custom Software Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Save Energy. Save Time. Save Money.
                </Typography>
                <Typography variant="subtitle1">
                    Complete digital solutions, from investigation to{" "}
                    <span className={classes.specialText}>celebration.</span>
                </Typography>
                <Button
                    component={Link}
                    to="/customSoftware"
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
                    alt="custom software icon"
                    src={customSoftwareIcon}
                />
            </Grid>
        </Grid>
    );
};

export default CustomSoftware;
