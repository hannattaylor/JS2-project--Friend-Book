import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import friendReducer from "./reducers/friendReducer";

const store = createStore(
  friendReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default store;
