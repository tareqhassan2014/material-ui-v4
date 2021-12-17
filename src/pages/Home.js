import { Grid, makeStyles } from "@material-ui/core";
import CustomSoftware from "../components/customSoftware/CustomSoftware";
import HeroBlock from "../components/heroBlock/HeroBlock";
import MobileApp from "../components/mobileApp/MobileApp";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: "5em",
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item>
                <HeroBlock />
            </Grid>
            <Grid item>
                <CustomSoftware />
            </Grid>
            <Grid item>
                <MobileApp />
            </Grid>
        </Grid>
    );
};

export default Home;
