import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FavoriteArtistsCard } from "../components/cards/FavoriteArtistsCard";
import { TabTitle } from "../utils/GlobalFunctions";

export const Favorites = () => {
  const spotify = new SpotifyWebApi();
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    const _spotifyToken = localStorage.getItem("spotifyToken");
    if (_spotifyToken) {
      spotify.setAccessToken(_spotifyToken);
    }

    spotify.getMyTopArtists().then((response) => {
      setFavorites(response.items);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  TabTitle("DamkunzReactSpotify | My Favorites");

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>My Favorite Artist</h1>
      <Grid container spacing={3}>
        {favorites ? (
          favorites.map((favorite) => (
            <Grid item xs={12} sm={6} lg={4} key={favorite.id}>
              <FavoriteArtistsCard favorite={favorite} />
            </Grid>
          ))
        ) : (
          <Typography variant="h5" sx={{ textAlign: "center", mt: 6, ml: 3 }}>
            Go follow some artists on Spotify!
          </Typography>
        )}
      </Grid>
    </React.Fragment>
  );
};
