import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
    <BrowserRouter>
        <CssBaseline />
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
