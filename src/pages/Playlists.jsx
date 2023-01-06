import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PlaylistsCard } from "../components/cards/PlaylistsCard";
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
              <PlaylistsCard playlist={playlist} />
            </Grid>
          ))
        ) : (
          <Typography variant="h5" sx={{ textAlign: "center", mt: 6, ml: 3 }}>
            Go create some playlists!
          </Typography>
        )}
      </Grid>
    </React.Fragment>
  );
};
