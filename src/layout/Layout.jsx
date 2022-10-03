import React from "react";
import BottomNav from "../components/navigation/BottomNav";
import { Container, CssBaseline } from "@mui/material";

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
