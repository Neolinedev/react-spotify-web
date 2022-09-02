import React from "react";
import BottomNav from "../components/navigation/BottomNav";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <main>{children}</main>
        <BottomNav />
      </Container>
    </React.Fragment>
  );
};
