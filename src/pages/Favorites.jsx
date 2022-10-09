import React from "react";
import Data from "../constants/fav_artist/artist.json";
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
  const data = Data;
  TabTitle("React Spotify Web | My Favorites");

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>My Favorite Artist</h1>
      <Grid container spacing={3}>
        {data.map((artist) => (
          <Grid item xs={12} sm={6} lg={4} key={artist.id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia component="img" height="200" image={artist.images[0].url} alt={artist.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {artist.name}
                </Typography>
                <Typography component="span" variant="body2" color="text.secondary" sx={{ display: "block" }}>
                  {artist.genres.map((genre, i) => (
                    <Chip color="success" label={genre} key={i} sx={{ m: 0.5, textTransform: "uppercase" }} />
                  ))}
                </Typography>
              </CardContent>
              <CardActions style={{ bottom: 0, top: "auto" }}>
                <Link variant="button" sx={{ ml: 1 }} underline="none" target="_blank" href={artist.external_urls.spotify}>
                  Visit Spotify
                </Link>
                <Link variant="button" sx={{ ml: 1 }} underline="none" component={RouteLink} to={`/favorites/${artist.id}`}>
                  Details
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
