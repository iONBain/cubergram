import { useContext } from "react";
import { DataContext } from "../../index";
import PostCard from "./Components/PostCard";

const Feed = () => {
  const {
    data: { posts, loader },
  } = useContext(DataContext);
  console.log(posts, "from feed");
  return (
    !loader && (
      <div className="flex-col gap-16">
        {posts && posts.map((post) => <PostCard postData={post} />)}
        {/* This is Feed */}
      </div>
    )
  );
};

export default Feed;
