import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { Link as RouterLink } from "react-router-dom";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { TabTitle } from "../utils/GlobalFunctions";

export const Playlists = () => {
  const spotify = new SpotifyWebApi();
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const _spotifyToken = localStorage.getItem("spotifyToken");
    if (_spotifyToken) {
      spotify.setAccessToken(_spotifyToken);
    }

    spotify.getUserPlaylists().then((response) => {
      setPlaylists(response.items);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  TabTitle("DamkunzReactSpotify | My Playlists");

  return (
    <React.Fragment>
      <h1 sx={{ textAlign: "center" }}>My Playlists</h1>
      <Grid container spacing={3}>
        {playlists ? (
          playlists.map((playlist, i) => (
            <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }} key={i}>
              <Card sx={{ maxWidth: { lg: 300, sm: 500, xs: 420 }, borderRadius: 3, height: "100%" }}>
                <CardActionArea
                  component={RouterLink}
                  to={`/playlist/${playlist.id}`}
                  sx={{
                    position: "relative",
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease-in-out",
                    },
                  }}
                >
                  <CardMedia component="img" height="100" image={playlist.images[0].url} sx={{ height: "fit-content", boxShadow: "0 5px 10px 2px rgba(0,0,0,0.5)" }} />
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h5" sx={{ textAlign: "center", marginTop: 6 }}>
            Loading...
          </Typography>
        )}
      </Grid>
    </React.Fragment>
  );
};
