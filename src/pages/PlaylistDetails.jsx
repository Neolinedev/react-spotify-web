import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { TabTitle } from "../utils/GlobalFunctions";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export const PlaylistDetails = () => {
  let index = 1;
  const spotify = new SpotifyWebApi();
  const location = useLocation();
  const playlistId = location.pathname.split("/")[2];
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState(null);
  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  useEffect(() => {
    const _spotifyToken = localStorage.getItem("spotifyToken");
    if (_spotifyToken) {
      spotify.setAccessToken(_spotifyToken);
    }

    spotify.getPlaylist(playlistId).then((response) => {
      setPlaylist(response);
    });

    spotify.getPlaylistTracks(playlistId).then((response) => {
      setTracks(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  TabTitle(`DamkunzReactSpotify | ${playlist?.name}`);

  return (
    <React.Fragment>
      {playlist && (
        <Grid container sx={{ marginTop: 5, display: "flex", justifyContent: "space-between" }}>
          <Link
            variant="button"
            underline="none"
            href="/playlists"
            sx={{
              borderRadius: 50,
              height: 32,
              width: 32,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 10,
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <ArrowBackIosNewOutlinedIcon />
          </Link>
          <Grid spacing={2} container sx={{ marginTop: 8 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              sx={{
                marginLeft: { sm: 6, lg: 10 },
                marginRight: { sm: 13, lg: 10 },
                display: { xs: "flex", sm: "flex" },
                justifyContent: { xs: "center", sm: "center", lg: "flex-start" },
              }}
            >
              <Avatar alt={playlist.name} src={playlist.images[0].url} sx={{ width: 250, height: 250, boxShadow: "0 2px 18px 1px rgba(0,0,0,0.4)" }} variant="square" />
            </Grid>
            <Grid item xs={12} sm={12} md={8} sx={{ display: "flex", flexWrap: "wrap", flexFlow: "column", justifyContent: "flex-end", marginLeft: 0, marginTop: { xs: 4 } }}>
              <Typography variant="h2" component="div" sx={{ fontSize: { xs: 13, lg: 12 }, textTransform: "uppercase" }}>
                Playlist
              </Typography>
              <Typography variant="h1" component="div" sx={{ fontSize: { xs: 54, lg: 60 }, fontWeight: 800 }}>
                {playlist.name}
              </Typography>
              <Typography variant="p" component="div" sx={{ fontSize: 16, color: "#B3B3B3" }}>
                {playlist.description}
              </Typography>
              <Typography variant="p" component="div" sx={{ fontSize: 16, fontWeight: 600 }}>
                {playlist.owner.display_name} • {playlist.tracks.total} songs
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} justify="center">
              <TableContainer sx={{ marginTop: 10 }}>
                <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell align="left">Title</TableCell>
                      <TableCell align="left">Album</TableCell>
                      <TableCell align="left">Duration</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tracks?.items.map((track, i) => (
                      <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 }, alignItems: "stretch" }}>
                        <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                          {index++}
                        </TableCell>
                        <TableCell sx={{ display: "flex", alignItems: "center", borderBottom: "none" }}>
                          <Avatar alt={track.name} src={track.track.album.images[0].url} variant="square" />
                          <Typography variant="p" component="div" sx={{ fontSize: 16, paddingLeft: 2 }}>
                            {track.track.name}
                            {track.track.artists.map((artist, i) => (
                              <Typography variant="p" component="div" sx={{ fontSize: 14, color: "#A7A7A7" }} key={i}>
                                <span sx={{ display: "inline-block" }}>{artist.name}</span>
                              </Typography>
                            ))}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ color: "#B3B3B3", borderBottom: "none" }}>{track.track.album.name}</TableCell>
                        <TableCell sx={{ color: "#B3B3B3", borderBottom: "none" }}>{millisToMinutesAndSeconds(track.track.duration_ms)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};
