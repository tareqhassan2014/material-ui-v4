import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

const theme = createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },
    },
    typography: {
        tab: {
            fontFamily: "RaleWay",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        h2: {
            fontFamily: "RaleWay",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: `${arcBlue}`,
            lineHeight: 1.5,
        },
        h4: {
            fontFamily: "RaleWay",
            fontSize: "1.75rem",
            color: arcBlue,
            fontWeight: 700,
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: arcGrey,
        },
        estimate: {
            fontFamily: "Pacifico",
            textTransform: "none",
            color: "white",
        },
        learnButton: {
            borderColor: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            color: arcBlue,
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
    },
});

export default theme;
