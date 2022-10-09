import { useLocation } from "react-router-dom";
import { TabTitle } from "../utils/GlobalFunctions";
import Data from "../constants/fav_artist/artist.json";
import React from "react";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const ArtistDetails = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const data = Data;
  const artist = data.find((artist) => artist.id === id);
  TabTitle(`React Spotify Web | ${artist.name}`);

  const artistName = artist.name;
  const topTracks = require(`../constants/fav_artist/popular_tracks/${artistName}.json`);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>- {artist.name} -</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Stack align="center" justify="center">
            <Avatar alt={artist.name} src={artist.images[0].url} sx={{ height: 240, width: 240, border: 2 }} />
            <Link variant="button" sx={{ ml: 1, mt: 5, backgroundColor: "#359130", px: 1, py: 0.5, borderRadius: 50, color: "white" }} underline="none" href="/favorites">
              Back to Favorites
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={8} sx={{ marginBottom: 3 }}>
          <h2>Top Tracks</h2>
          <Grid direction="row" container spacing={3}>
            {topTracks.map((track, i) => (
              <Grid item key={track.id} xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", alignItems: "center" }}>
                <img src={track.album.images[0].url} alt={track.name} width="85" key={i} />
                <Stack direction="column" sx={{ marginLeft: 2 }}>
                  <Typography variant="h5">{track.name}</Typography>
                  <Typography variant="subtitle2">From Album : {track.album.name}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
                    {track.artists[0].name}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
