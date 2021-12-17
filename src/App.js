import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import theme from "./components/theme/theme";
import Home from "./pages/Home";

const App = () => {
    const [menuIndex, setMenuIndex] = useState(0);
    const [serviceIndex, setServiceIndex] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <Header
                setMenuIndex={setMenuIndex}
                menuIndex={menuIndex}
                serviceIndex={serviceIndex}
                setServiceIndex={setServiceIndex}
            />
            <Routes>
                <Route path="/" element={<Home />} />
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
            <Footer
                setMenuIndex={setMenuIndex}
                menuIndex={menuIndex}
                serviceIndex={serviceIndex}
                setServiceIndex={setServiceIndex}
            />
        </ThemeProvider>
    );
};

export default App;
