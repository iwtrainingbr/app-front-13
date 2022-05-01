import {useState} from "react";
import {IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./like.css";

export default function Like () {
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
  }

  return (
    <IconButton onClick={handleLiked}>
      <FavoriteIcon className={liked && 'red'}/>
    </IconButton>
  )
}
