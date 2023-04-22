import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ForumContextProvider,ForumContext } from "./Contexts/ForumContext.jsx";

export {ForumContext}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ForumContextProvider>
        <App />
      </ForumContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
