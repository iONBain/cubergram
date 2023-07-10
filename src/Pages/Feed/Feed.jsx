import { useContext } from "react";
import { DataContext } from "../../index";
import PostCard from "./Components/PostCard";
import NewPostCard from "./Components/NewPostCard";
import "./Feed.css";
import SortByHeader from "./Components/SortByHeader";
import { AuthContext } from "../../Contexts/AuthContext";
const Feed = () => {
  const {
    data: { posts, loader, sortBy },
  } = useContext(DataContext);
  const {user} = useContext(AuthContext)
  const filteredUserPosts = posts.filter(({username})=> username===user.username)
  const sortedPosts =
    sortBy === "like"
      ? [...filteredUserPosts].sort((a, b) => b.likes.likeCount - a.likes.likeCount)
      : [...filteredUserPosts].sort((a, b) => {
          const dateA = new Date(a.updatedAt);
          const dateB = new Date(b.updatedAt);
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
