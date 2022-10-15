import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useLocation } from "react-router-dom";
import { TabTitle } from "../utils/GlobalFunctions";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const ArtistDetails = () => {
  const location = useLocation();
  const spotify = new SpotifyWebApi();
  const artistId = location.pathname.split("/")[2];
  const [artist, setArtist] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  let numFormatter = Intl.NumberFormat("en-US");

  useEffect(() => {
    const _spotifyToken = localStorage.getItem("spotifyToken");
    if (_spotifyToken) {
      spotify.setAccessToken(_spotifyToken);
    }

    spotify.getArtist(artistId).then((response) => {
      setArtist(response);
    });

    spotify.getArtistTopTracks(artistId, "US").then((tracks) => {
      setTopTracks(tracks);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  TabTitle(`DamkunzReactSpotify | ${artist?.name}`);

  return (
    <React.Fragment>
      {artist && (
        <Grid container spacing={3} sx={{ marginTop: 5 }}>
          <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Stack align="center" justify="center">
              <Avatar alt={artist.name} src={artist.images[0].url} sx={{ height: 240, width: 240, border: 2 }} />
              <Typography variant="h5" component="div" sx={{ mt: 1, color: "aqua" }}>
                {artist.name}
              </Typography>
              <Typography variant="body2" component="div" sx={{ mt: 1 }}>
                {numFormatter.format(artist.followers.total)} Followers
              </Typography>
              <Link variant="button" sx={{ ml: 1, mt: 1, backgroundColor: "#359130", px: 1, py: 0.5, borderRadius: 50, color: "white", fontWeight: "bold" }} underline="none" href="/favorites">
                Back to Favorites
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={8} sx={{ marginBottom: 3 }}>
            <h2>Top Tracks</h2>
            <Grid direction="row" container spacing={3}>
              {topTracks?.tracks.map((track, i) => (
                <Grid item key={i} xs={12} sm={12} md={6} lg={6} sx={{ display: "flex", alignItems: "center" }}>
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
      )}
    </React.Fragment>
  );
};
