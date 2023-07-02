import { useContext } from "react";
import "./Feed/Feed.css";
import { DataContext } from "../Contexts/DataContext";
import SortByHeader from "./Feed/Components/SortByHeader";
import PostCard from "./Feed/Components/PostCard";
const ExplorePosts = () => {
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
        {sortedPosts &&
          sortedPosts.map((post) => (
            <PostCard key={post._id} postData={post} />
          ))}
      </section>
    )
  );
};

export default ExplorePosts;
