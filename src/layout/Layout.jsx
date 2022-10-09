import React, { useState, useEffect } from "react";
import BottomNav from "../components/navigation/BottomNav";
import { Container, CssBaseline } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import SpotifyWebApi from "spotify-web-api-js";
import { loginURL } from "../services/spotifyLogin";
import { getTokenFromURL } from "../services/spotifyLogin";

export const Layout = ({ children }) => {
  const spotify = new SpotifyWebApi();
  const [spotifyToken, setSpotifyToken] = useState("");

  useEffect(() => {
    const _spotifyToken = getTokenFromURL().access_token;
    window.location.hash = "";

    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);
      spotify.setAccessToken(_spotifyToken);
      localStorage.setItem("spotifyToken", _spotifyToken);

      if (!localStorage.getItem("spotifyToken")) {
        localStorage.setItem("spotifyToken", _spotifyToken);
      }
    }

    if (!_spotifyToken) {
      window.location.hash = "";
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <main>{children}</main>
        {spotifyToken && localStorage.getItem("spotifyToken") ? <BottomNav /> : null}
        {!spotifyToken && !localStorage.getItem("spotifyToken") ? (
          <Grid container sx={{ marginTop: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Link
              variant="button"
              underline="none"
              href={loginURL}
              sx={{
                borderRadius: 50,
                height: 50,
                width: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                fontWeight: "bold",
                fontSize: 14,
                backgroundColor: "aqua",
              }}
            >
              Login with Spotify
            </Link>
          </Grid>
        ) : (
          <BottomNav />
        )}
      </Container>
    </React.Fragment>
  );
};
