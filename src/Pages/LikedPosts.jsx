import PostCard from "./Feed/Components/PostCard";
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import { AuthContext } from "../Contexts/AuthContext";

const LikedPosts = () => {
  const {
    data: { posts },
  } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const likedPosts = posts.filter((post) =>
    post.likes.likedBy.some((u) => u.username === user.username)
  );

  return likedPosts.length === 0 ? (
    <section className="bookmarks-main ">
      <h2 className="text-gap-5 ">No Liked posts yet!</h2>
    </section>
  ) : (
    <div className="bookmarks-main">
      <h2 className="accent text-gap-5 border-bottom p-10">Liked Posts</h2>
      {likedPosts &&
        likedPosts.map((liked) => (
          <PostCard postData={liked} key={liked._id} />
        ))}
    </div>
  );
};

export default LikedPosts;
