import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import configStore from "./configStore";
import "./style.css";

const container = document.getElementById("root");
const root = createRoot(container);

const store = configStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
