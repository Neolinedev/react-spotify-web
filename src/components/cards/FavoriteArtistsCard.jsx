import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouteLink } from "react-router-dom";

export const FavoriteArtistsCard = ({ favorite }) => {
  return (
    <Card
      sx={{
        height: 400,
        position: "relative",
        borderRadius: 4,
      }}
    >
      <CardMedia component="img" sx={{ height: "100%", opacity: 0.8 }} image={favorite.images[0].url} alt={favorite.name} />
      <CardContent sx={{ position: "absolute", bottom: 30 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, color: "#FAFAFA" }}>
          {favorite.name}
        </Typography>
      </CardContent>
      <CardActions style={{ position: "absolute", bottom: 0, top: "auto" }}>
        <Link
          variant="button"
          sx={{
            ml: 1,
            border: "1px solid white",
            padding: 0.7,
            borderRadius: 2,
            color: "#FAFAFA",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          underline="none"
          target="_blank"
          href={favorite.external_urls.spotify}
        >
          Visit Spotify
        </Link>
        <Link
          variant="button"
          sx={{
            ml: 1,
            border: "1px solid white",
            padding: 0.7,
            borderRadius: 2,
            color: "#FAFAFA",
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
          underline="none"
          component={RouteLink}
          to={`/favorites/${favorite.id}`}
        >
          Details
        </Link>
      </CardActions>
    </Card>
  );
};
