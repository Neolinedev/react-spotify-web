import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { SearchResults } from "../components/SearchResults";
import { TabTitle } from "../utils/GlobalFunctions";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const spotify = new SpotifyWebApi();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  TabTitle("DamkunzReactSpotify | Search");

  useEffect(() => {
    const _spotifyToken = localStorage.getItem("spotifyToken");
    if (_spotifyToken) {
      spotify.setAccessToken(_spotifyToken);
    }

    if (!search) {
      return setSearchResults([]);
    } else {
      let cancel = false;

      spotify.searchTracks(search).then((response) => {
        if (cancel) return;
        setSearchResults(
          response.tracks.items.map((track) => {
            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              images: track.album.images[0].url,
            };
          })
        );
      });

      return () => (cancel = true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <React.Fragment>
      <Grid container mt={3} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "center", xs: "center" } }}>
        <Paper
          component="form"
          sx={{
            p: "4px 8px",
            display: "flex",
            alignItems: "center",
            width: 650,
            borderRadius: 2,
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;",
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search anything" inputProps={{ "aria-label": "Search anything" }} onChange={handleChange} value={search} />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={12} lg={12} md={12} sm={12}>
          <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
            Search result for : {search}
          </Typography>
        </Grid>
        {searchResults.map((track) => (
          <Grid item xs={12} lg={12} md={12} sm={12} sx={{ my: 1 }} key={track.uri}>
            <SearchResults track={track} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
