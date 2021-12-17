import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import animationData from "../../animations/landingAnimation/data";
import LottieAnimation from "../../Lottie/LottieAnimation";

const useStyles = makeStyles((theme) => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        margin: " 2em, 0, 0, 10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em",
        },
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
        },
    },
    buttonContainer: {
        marginTop: "1em",
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    heroLearnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },
}));

const HeroBlock = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justifyContent="flex-end"
            alignItems="center"
            direction="row"
        >
            <Grid sm item className={classes.heroTextContainer}>
                <Typography variant="h2" align="center">
                    Bringing West Coast Technology
                    <br />
                    to the Midwest
                </Typography>
                <Grid
                    container
                    justifyContent="center"
                    className={classes.buttonContainer}
                >
                    <Grid item>
                        <Button
                            component={Link}
                            to="/estimate"
                            variant="contained"
                            className={classes.estimateButton}
                        >
                            Free Estimate
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/revolution"
                            className={classes.heroLearnButton}
                        >
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
                <LottieAnimation animationData={animationData} />
            </Grid>
        </Grid>
    );
};

export default HeroBlock;
