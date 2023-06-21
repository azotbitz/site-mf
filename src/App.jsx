import Hero from "./components/Hero";
import Guide from "./components/Guide";
import Properties from "./components/Properties";
import Details from "./components/Details";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: "Poppins, sans-serif",
      },
      body1: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "14px",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      body2: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "18px",
      },
    },
  });

  return <ThemeProvider theme={theme}>
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage/>}/>
        <Route path={'/news'} element={<NewsPage/>}/>
        <Route path={'/about'} element={<AboutPage/>}/>
        <Route path={'/contact'} element={<ContactPage/>}/>
      </Route>
      <Route path={'*'} element={<ErrorPage/>}/>
    </Routes>
  </ThemeProvider>;
}

export default App;
