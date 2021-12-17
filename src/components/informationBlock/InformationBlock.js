import {
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import infoBackground from "../../assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em",
        },
    },
}));

const InformationBlock = () => {
    const classes = useStyles();
    const theme = useTheme();
    const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
    const smallDevice = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid
            container
            style={{ height: "80em" }}
            alignItems="center"
            direction="row"
            className={classes.infoBackground}
        >
            <Grid
                item
                container
                style={{
                    textAlign: extraSmall ? "center" : "inherit",
                }}
                direction={extraSmall ? "column" : "row"}
            >
                <Grid
                    item
                    sm
                    style={{
                        marginLeft: extraSmall
                            ? 0
                            : smallDevice
                            ? "2em"
                            : "5em",
                    }}
                >
                    <Grid
                        container
                        style={{ marginBottom: extraSmall ? "10em" : 0 }}
                        direction="column"
                    >
                        <Typography variant="h2" style={{ color: "white" }}>
                            About Us
                        </Typography>
                        <Typography variant="subtitle2">
                            Let's get personal.
                        </Typography>
                        <Grid item>
                            <Button
                                component={Link}
                                to="/about"
                                variant="outlined"
                                style={{
                                    color: "white",
                                    borderColor: "white",
                                }}
                                className={classes.learnButton}
                            >
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    sm
                    style={{
                        marginRight: extraSmall
                            ? 0
                            : smallDevice
                            ? "2em"
                            : "5em",
                        textAlign: extraSmall ? "center" : "right",
                    }}
                >
                    <Grid container direction="column">
                        <Typography variant="h2" style={{ color: "white" }}>
                            Contact Us
                        </Typography>
                        <Typography variant="subtitle2">
                            Say hello!{" "}
                            <span role="img" aria-label="waving hand">
                                👋🏻
                            </span>
                        </Typography>
                        <Grid item>
                            <Button
                                component={Link}
                                to="/contact"
                                variant="outlined"
                                style={{
                                    color: "white",
                                    borderColor: "white",
                                }}
                                className={classes.learnButton}
                            >
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default InformationBlock;
