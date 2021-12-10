import { ThemeProvider } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import theme from "./components/theme/theme";
import Home from "./pages/Home";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
