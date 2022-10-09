import React, { useState, useEffect } from "react";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { TabTitle } from "../utils/GlobalFunctions";
import SpotifyWebApi from "spotify-web-api-js";

export const UserInfo = () => {
  const spotify = new SpotifyWebApi();
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [spotifyToken, setSpotifyToken] = useState("");

  TabTitle("React Spotify Web | My Profile");

  useEffect(() => {
    const _spotifyToken = localStorage.getItem("spotifyToken");
    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);
      spotify.setAccessToken(_spotifyToken);
    }
    spotify.getMe().then((user) => {
      setUser(user);
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
                <Avatar alt={user.display_name} src={user.images[0].url} sx={{ width: 200, height: 200, marginTop: 5 }} />
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
