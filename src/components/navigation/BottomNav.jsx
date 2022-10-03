import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
          <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} component={Link} to="/" />
          <BottomNavigationAction label="Favorites" value="/favorites" icon={<FavoriteIcon />} component={Link} to="/favorites" />
          <BottomNavigationAction label="Playlists" value="/playlists" icon={<PlaylistAddCheckIcon />} component={Link} to="/playlists" />
          <BottomNavigationAction label="Nearby" value="/nearby" icon={<LocationOnIcon />} component={Link} to="/nearby" />
        </BottomNavigation>
      </AppBar>
    </Box>
  );
}
