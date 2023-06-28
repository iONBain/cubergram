import { useContext } from "react";
import { DataContext } from "../../index";
import PostCard from "./Components/PostCard";
import NewPostCard from "./Components/NewPostCard";
import "./Feed.css";
import SortByHeader from "./Components/SortByHeader";
const Feed = () => {
  const {
    data: { posts, loader, sortBy },
  } = useContext(DataContext);
  const sortedPosts =
    sortBy === "like"
      ? [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount)
      : [...posts].sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });

  return (
    !loader && (
      <section className="flex-col flex-center gap-16 main-feed">
        <SortByHeader />
        <NewPostCard />
        {sortedPosts &&
          sortedPosts.map((post) => (
            <PostCard key={post._id} postData={post} />
          ))}
      </section>
    )
  );
};

export default Feed;
