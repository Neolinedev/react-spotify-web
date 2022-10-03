import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Favorites } from "./pages/Favorites";
import { UserInfo } from "./pages/UserInfo";
import { Playlists } from "./pages/Playlists";
import { ArtistDetails } from "./pages/ArtistDetails";
import { PlaylistDetails } from "./pages/PlaylistDetails";
import { TabTitle } from "./utils/GlobalFunctions";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
  TabTitle("React Spotify Web | My Profile");

  const [darkMode, setDarkMode] = useState(false);

  const Theme = createTheme({
    typography: {
      fontFamily: ["Nunito Sans"].join(","),
    },
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Grid container mt={3} sx={{ display: "flex", justifyContent: { lg: "space-between", sm: "space-between", xs: "center" } }}>
          {!darkMode ? (
            <span onClick={changeMode}>
              <ModeNightIcon sx={{ fontSize: 50, px: 1 }} />
            </span>
          ) : (
            <span onClick={changeMode}>
              <LightModeIcon sx={{ fontSize: 50, px: 1 }} />
            </span>
          )}
          <SearchBar />
        </Grid>
        <Routes>
          <Route path="/" element={<UserInfo />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/favorites/:id" element={<ArtistDetails />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist/:id" element={<PlaylistDetails />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};
