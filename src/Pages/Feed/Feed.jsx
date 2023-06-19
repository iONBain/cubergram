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
      <section className="flex-col flex-center gap-16">
        {posts && posts.map((post) => <PostCard postData={post} />)}
      </section>
    )
  );
};

export default Feed;
