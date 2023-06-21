import PostCard from "./Feed/Components/PostCard";
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";

const LikedPosts = () => {
const {data:{likedPosts}} = useContext(DataContext)


return likedPosts.length === 0 ? (
    "No Liked posts yet!"
  ) : (
    <div className="bookmarks-main">
      {likedPosts &&
        likedPosts.map((liked) => <PostCard postData={liked} key={liked._id} />)}
    </div>
  );
};

export default LikedPosts;
