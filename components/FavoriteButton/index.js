import { IconButton, StyledBookmark } from "../styledPages";
import { Bone } from "lucide-react";

export default function FavoriteButton({ _id, toggleFavorite, isFavorite }) {
  return (
    <IconButton
      type="button"
      onClick={() => toggleFavorite(_id)}
      aria-label={isFavorite ? "unlike" : "like"}
      $isFavorite={isFavorite}
    >
      <Bone color={isFavorite ? "#801100ff" : "black"}
      strokeWidth={2}/>
    </IconButton>
  );
}
