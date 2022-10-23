import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const SearchResults = ({ track }) => {
  return (
    <Card sx={{ display: "flex", mx: 1, height: "auto", borderRadius: 2 }} key={track.uri}>
      <CardMedia component="img" sx={{ width: 150 }} image={track.albumUrl} alt={track.title} />
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <CardContent>
          <Typography component="div" variant="h6">
            {track.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {track.artist}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
