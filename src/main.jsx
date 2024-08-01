import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import FormDataContextProvider from "./context/FormDataContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <FormDataContextProvider>
          <App />
        </FormDataContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
