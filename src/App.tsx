import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { createAppStore } from "./redux/Store";
import { Shell } from "./shell/Shell";

export const App = () => {
  const store = createAppStore();
  return (
    <Provider store={store}>
      <HashRouter>
        <Shell />
      </HashRouter>
    </Provider>
  );
};

App.displayName = "App";
