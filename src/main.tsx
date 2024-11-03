import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#493628", // Customize this color to your desired primary color
    // },
    // secondary: {
    //   main: "#AB886D", // Customize the secondary color if needed
    // },
    background: {
      default: "#FFFFFF", // Background color for the whole app
      //paper: "#D6C0B3", // Background for Paper components (like Card and Paper)
    },
    // text: {
    //   primary: "#ffffff", // Primary text color
    //   secondary: "#9e9e9e", // Secondary text color
    // },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
