import { IconButton, StyledBookmark } from "../styledPages";

export default function FavoriteButton({ _id, toggleFavorite, isFavorite }) {
  return (
    <IconButton
      type="button"
      onClick={() => toggleFavorite(_id)}
      aria-label={isFavorite ? "unlike" : "like"}
      $isFavorite={isFavorite}
    >
      <StyledBookmark $isFavorite={isFavorite} />
    </IconButton>
  );
}
