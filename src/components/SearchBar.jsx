import { React } from "react";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "4px",
        display: "flex",
        alignItems: "center",
        width: { lg: 440, sm: 440, xs: 300 },
        marginLeft: { xs: 1 },
        borderRadius: 50,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
        <SearchIcon sx={{ fontSize: 30, opacity: 0.7 }} />
      </IconButton>
      <InputBase sx={{ ml: 0.8, flex: 1, fontSize: 17 }} placeholder="Search Anything" inputProps={{ "aria-label": "search anything" }} onChange={(e) => console.log(e.target.value)} />
    </Paper>
  );
};
