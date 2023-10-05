import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `/app-dark.css`,
  light: `/app-light.css`,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeSwitcherProvider themeMap={themes} defaultTheme='light'>
    <App />
  </ThemeSwitcherProvider>,
);
