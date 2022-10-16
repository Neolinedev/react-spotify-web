import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Favorites } from "./pages/Favorites";
import { UserInfo } from "./pages/UserInfo";
import { Login } from "./pages/auth/Login";
import { Playlists } from "./pages/Playlists";
import { ArtistDetails } from "./pages/ArtistDetails";
import { PlaylistDetails } from "./pages/PlaylistDetails";
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Logout } from "./pages/auth/Logout";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [spotifyToken, setSpotifyToken] = useState("");

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

    const _spotifyToken = localStorage.getItem("spotifyToken");
    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Grid container mt={3} sx={{ display: "flex", justifyContent: { lg: "space-between", md: "space-between", sm: "space-between", xs: "center" } }}>
          {!darkMode ? (
            <span onClick={changeMode}>
              <ModeNightIcon sx={{ fontSize: 50, px: 1 }} />
            </span>
          ) : (
            <span onClick={changeMode}>
              <LightModeIcon sx={{ fontSize: 50, px: 1 }} />
            </span>
          )}
          {spotifyToken ? <Logout /> : null}
        </Grid>
        <Routes>
          {spotifyToken ? (
            <>
              <Route path="/user" element={<UserInfo />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/favorites/:id" element={<ArtistDetails />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/playlist/:id" element={<PlaylistDetails />} />
            </>
          ) : (
            <Route path="/" element={<Login />}>
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<UserInfo />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/favorites/:id" element={<ArtistDetails />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/playlist/:id" element={<PlaylistDetails />} />
            </Route>
          )}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};
