import React from "react";
import Link from "@mui/material/Link";
import LogoutIcon from "@mui/icons-material/Logout";

export const Logout = () => {
  const logout = () => {
    localStorage.removeItem("spotifyToken");
    window.location.href = "/";
  };

  return (
    <Link
      variant="button"
      underline="none"
      onClick={logout}
      sx={{
        borderRadius: 50,
        height: 38,
        width: 38,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 10,
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
    >
      <LogoutIcon sx={{ fontSize: 34, color: "aqua", marginLeft: 2, marginTop: { lg: 2, md: 2, sm: 2, xs: 2 } }} />
    </Link>
  );
};
