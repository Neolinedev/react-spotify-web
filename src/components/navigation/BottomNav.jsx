import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

export default function LabelBottomNavigation() {
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box mt={10}>
      <AppBar position="fixed" color="transparent" style={{ top: "auto", bottom: 0 }}>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label="User" value="/user" icon={<PersonIcon />} component={Link} to="/user" />
          <BottomNavigationAction label="Favorites" value="/favorites" icon={<FavoriteIcon />} component={Link} to="/favorites" />
          <BottomNavigationAction label="Playlists" value="/playlists" icon={<PlaylistAddCheckIcon />} component={Link} to="/playlists" />
          <BottomNavigationAction label="Search" value="/search" icon={<SearchIcon />} component={Link} to="/search" />
        </BottomNavigation>
      </AppBar>
    </Box>
  );
}
