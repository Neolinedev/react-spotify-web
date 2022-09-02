import React from "react";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TabTitle } from "../utils/GlobalFunctions";

// Fetch the user's profile data from the constants/user/user.json file
export const UserInfo = () => {
  const user = require("../constants/user/user.json");
  TabTitle("React Spotify Web | My Profile");

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>My Spotify Profile</h1>
      <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Avatar src="https://cdn-icons-png.flaticon.com/512/25/25231.png" sx={{ width: 180, height: 180 }} />
      </Container>
      <Typography variant="h4" sx={{ textAlign: "center", paddingTop: 2 }}>
        {user.display_name}
      </Typography>
    </React.Fragment>
  );
};
