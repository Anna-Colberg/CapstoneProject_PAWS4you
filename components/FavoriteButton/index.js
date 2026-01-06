import Bookmark from "/public/icons/bookmark.svg";
import { IconButton } from "./Styled_favoritebutton";

export default function FavoriteButton({ _id, toggleLiked, isLiked }) {
  return (
    <IconButton
      type="button"
      onClick={() => toggleLiked(_id)}
      aria-label={isLiked ? "unlike" : "like"}
      $isLiked={isLiked}
    >
      <Bookmark
        width={28}
        height={28} />
    </IconButton>
  );
}
