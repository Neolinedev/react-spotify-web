import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const SearchResults = ({ track }) => {
  return (
    <Card
      sx={{
        display: "flex",
        mx: 1,
        my: 0.5,
        height: "auto",
        borderRadius: 2,
        boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, aqua 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;",
      }}
      key={track.uri}
    >
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
