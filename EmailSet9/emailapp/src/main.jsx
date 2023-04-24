import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { EmailContextProvider,EmailContext } from "./Contexts/EmailContextProvider.jsx";

export { EmailContext } 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <EmailContextProvider>
    <App />
    </EmailContextProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);
