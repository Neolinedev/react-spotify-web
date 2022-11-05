import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouteLink } from "react-router-dom";
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
              <Card
                sx={{
                  height: 448,
                  position: "relative",
                  boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, aqua 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;",
                }}
              >
                <CardMedia component="img" height="200" image={favorite.images[0].url} alt={favorite.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                    {favorite.name}
                  </Typography>
                  <Typography component="span" variant="body2" color="text.secondary" sx={{ display: "block" }}>
                    {favorite.genres.map((genre, i) => (
                      <Chip color="success" label={genre} key={i} sx={{ m: 0.5, textTransform: "uppercase" }} />
                    ))}
                  </Typography>
                </CardContent>
                <CardActions style={{ position: "absolute", bottom: 0, top: "auto" }}>
                  <Link variant="button" sx={{ ml: 1 }} underline="none" target="_blank" href={favorite.external_urls.spotify}>
                    Visit Spotify
                  </Link>
                  <Link variant="button" sx={{ ml: 1 }} underline="none" component={RouteLink} to={`/favorites/${favorite.id}`}>
                    Details
                  </Link>
                </CardActions>
              </Card>
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
