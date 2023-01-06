import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import { Link as RouterLink } from "react-router-dom";

export const PlaylistsCard = ({ playlist }) => {
  return (
    <Card sx={{ maxWidth: { lg: 300, sm: 500, xs: 420 }, borderRadius: 3, height: "100%" }}>
      <CardActionArea
        component={RouterLink}
        to={`/playlist/${playlist.id}`}
        sx={{
          position: "relative",
          "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        <CardMedia component="img" height="100" image={playlist.images[0].url} sx={{ height: "fit-content", boxShadow: "0 5px 10px 2px rgba(0,0,0,0.5)" }} />
      </CardActionArea>
    </Card>
  );
};
