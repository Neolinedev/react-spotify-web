import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Playlist from "../constants/playlists/playlist.json";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { TabTitle } from "../utils/GlobalFunctions";

export const Playlists = () => {
  const data = Playlist;
  TabTitle("React Spotify Web | My Playlists");

  return (
    <React.Fragment>
      <h1 sx={{ textAlign: "center" }}>My Playlists</h1>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((items, i) => (
          <Grid item xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }} key={i}>
            <Card sx={{ maxWidth: { lg: 300, sm: 500, xs: 420 }, borderRadius: 3 }}>
              <CardActionArea component={RouterLink} to={`/playlist/${items.id}`}>
                <CardMedia component="img" height="100" image={items.images[0].url} sx={{ height: "fit-content", boxShadow: "0 5px 10px 2px rgba(0,0,0,0.5)" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
                    {items.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident omnis ipsam voluptatem magni quibusdam a.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
