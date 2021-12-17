import { Grid, makeStyles } from "@material-ui/core";
import CallToAction from "../components/CallToAction/CallToAction";
import CustomSoftware from "../components/customSoftware/CustomSoftware";
import HeroBlock from "../components/heroBlock/HeroBlock";
import InformationBlock from "../components/informationBlock/InformationBlock";
import MobileApp from "../components/mobileApp/MobileApp";
import RevolutionBlock from "../components/revolutionBlock/RevolutionBlock";
import WebsiteBlock from "../components/websiteBlock/WebsiteBlock";

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
            <Grid item>
                <WebsiteBlock />
            </Grid>
            <Grid item>
                <RevolutionBlock />
            </Grid>
            <Grid item>
                <InformationBlock />
            </Grid>
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>
    );
};

export default Home;
