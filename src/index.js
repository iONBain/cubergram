import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider,DataContext } from "./Contexts/DataContext";
import { AuthProvider } from "./Contexts/AuthContext";

export {DataContext}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let alertShow = false
setInterval(() => {
  document.title = alertShow ? "cuberGram" : "cuberGramer"
  alertShow = !alertShow
}, 10000);

// Call make Server
makeServer();

root.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);


