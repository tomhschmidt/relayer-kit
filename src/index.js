import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import DharmaProvider from "./contexts/DharmaContext";

import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <DharmaProvider>
            <App />
        </DharmaProvider>
    </BrowserRouter>,

    document.getElementById("root"),
);
registerServiceWorker();
