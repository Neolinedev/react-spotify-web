import React, { useState, useEffect } from "react";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { TabTitle } from "../utils/GlobalFunctions";
import SpotifyWebApi from "spotify-web-api-js";

export const UserInfo = () => {
  const spotify = new SpotifyWebApi();
  const [user, setUser] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [spotifyToken, setSpotifyToken] = useState("");

  TabTitle("DamkunzReactSpotify | My Profile");

  useEffect(() => {
    const _spotifyToken = localStorage.getItem("spotifyToken");
    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);
      spotify.setAccessToken(_spotifyToken);
    }

    spotify.getMe().then((user) => {
      setUser(user);
    });

    spotify.getMyRecentlyPlayedTracks({ limit: 1 }).then((response) => {
      setRecentlyPlayed(response.items[0].track);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Container>
        {user ? (
          <Grid container sx={{ marginTop: 5 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Avatar
                  alt={user.display_name}
                  src={user.images[0].url}
                  sx={{
                    width: 200,
                    height: 200,
                    marginTop: 5,
                    boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;",
                  }}
                />
              </Grid>
              <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h5" sx={{ marginTop: 5, fontWeight: 700, fontSize: 26, color: "aqua" }}>
                  {user.display_name}
                </Typography>
              </Grid>
              <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  {user.followers.total} Followers
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: "flex", justifyContent: "center", mt: 12 }}>
              <Card
                sx={{
                  display: "flex",
                  height: "80%",
                  width: "100%",
                  borderRadius: 2,
                  p: 2,
                  boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, aqua 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;",
                }}
              >
                <CardMedia component="img" sx={{ width: { lg: 150, md: 120, sm: 180, xs: 80 }, borderRadius: 2 }} image={recentlyPlayed?.album.images[0].url} alt={recentlyPlayed?.name} />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <CardContent>
                    <Typography component="div" variant="h6">
                      {recentlyPlayed?.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {recentlyPlayed?.artists.map((artist) => artist.name).join(", ")}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h5" sx={{ textAlign: "center", marginTop: 6 }}>
            Loading...
          </Typography>
        )}
      </Container>
    </React.Fragment>
  );
};
