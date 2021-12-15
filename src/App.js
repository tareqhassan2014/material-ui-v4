import { ThemeProvider } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import theme from "./components/theme/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/services" element={<div>Service</div>} />
                <Route
                    path="/customSoftware"
                    element={<div>Custom Software</div>}
                />
                <Route path="/website" element={<div>website</div>} />
                <Route path="/mobileApps" element={<div>Mobile apps</div>} />
                <Route path="/revolution" element={<div>revolution</div>} />
                <Route path="/about" element={<div>About</div>} />
                <Route path="/contact" element={<div>contact</div>} />
                <Route path="/estimate" element={<div>estimate</div>} />
            </Routes>

        </ThemeProvider>
    );
};

export default App;
