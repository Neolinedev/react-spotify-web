import React, { useState, useEffect } from "react";
import { FormGroup } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Favorites } from "./pages/Favorites";
import { UserInfo } from "./pages/UserInfo";
import { Playlists } from "./pages/Playlists";
import { ArtistDetails } from "./pages/ArtistDetails";
import { PlaylistDetails } from "./pages/PlaylistDetails";
import { TabTitle } from "./utils/GlobalFunctions";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

export const App = () => {
  TabTitle("React Spotify Web | My Profile");

  const [darkMode, setDarkMode] = useState(true);

  const Theme = createTheme({
    typography: {
      fontFamily: ["Nunito Sans"].join(","),
    },
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    const modeType = localStorage.getItem("dark") || "dark";
    if (modeType !== "dark") {
      setDarkMode(false);
    }
  }, []);

  const changeMode = () => {
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <FormGroup sx={{ mt: 2 }}>
          {!darkMode ? (
            <span onClick={changeMode}>
              <ModeNightIcon sx={{ fontSize: 30 }} />
            </span>
          ) : (
            <span onClick={changeMode}>
              <LightModeIcon sx={{ fontSize: 30 }} />
            </span>
          )}
        </FormGroup>
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
