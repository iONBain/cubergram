import PostCard from "./Feed/Components/PostCard";
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import "./Pages.css"

const BookmarkedPosts = () => {
  const {data:{posts,bookmarks}} = useContext(DataContext)
  const newBMPosts = posts.filter(({_id})=> bookmarks.includes(_id))

  return bookmarks.length === 0 ? (
    <section className="bookmarks-main">
      <h2 className="text-gap-5">

    No bookmarks yet!
      </h2>
    </section>
  ) : (
    <div className="bookmarks-main">
      {newBMPosts &&
        newBMPosts.map((mark) => <PostCard postData={mark} key={mark._id} />)}
    </div>
  );
};

export default BookmarkedPosts;
