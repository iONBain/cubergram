import { useContext } from "react";
import { DataContext } from "../../index";
import PostCard from "./Components/PostCard";
import "./Feed.css"
const Feed = () => {
  const {
    data: { posts, loader },
  } = useContext(DataContext);
  return (
    !loader && (
      <section className="flex-col flex-center gap-16 main-feed">
        {posts && posts.map((post) => <PostCard key={post._id} postData={post} />)}
      </section>
    )
  );
};

export default Feed;
