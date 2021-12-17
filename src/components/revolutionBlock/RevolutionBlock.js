import {
    Button,
    Card,
    CardContent,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React from "react";
import { Link } from "react-router-dom";
import revolutionBackground from "../../assets/repeatingBackground.svg";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: "5em",
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%",
        },
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },
}));

const RevolutionBlock = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            style={{ height: "100em", marginTop: "12em" }}
            alignItems="center"
            justify="center"
        >
            <Card className={classes.revolutionCard}>
                <CardContent>
                    <Grid
                        container
                        direction="column"
                        style={{ textAlign: "center" }}
                    >
                        <Grid item>
                            <Typography variant="h3" gutterBottom>
                                The Revolution
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                Visionary insights coupled with cutting-edge
                                technology is a recipe for revolution.
                            </Typography>
                            <Button
                                component={Link}
                                to="/revolution"
                                className={classes.learnButtonHero}
                                variant="outlined"
                                endIcon={<ArrowRightAltIcon />}
                            >
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
        </Grid>
    );
};

export default RevolutionBlock;
