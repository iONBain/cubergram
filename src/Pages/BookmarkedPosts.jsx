import PostCard from "./Feed/Components/PostCard";
import { getUserBookmarkedPosts } from "../services/getData";
import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useEffect } from "react";
import { DataContext } from "../Contexts/DataContext";

const BookmarkedPosts = () => {
  const {data:{posts,bookmarks}} = useContext(DataContext)
  // const {token} = useContext(AuthContext)
  // const getBMPosts = async () => {
  //   await getUserBookmarkedPosts(token,dataDispatch);
  // };
  const newBMPosts = posts.filter(({_id})=> bookmarks.includes(_id))

  // useEffect(()=>()=>getBMPosts(),[])
  return bookmarks.length === 0 ? (
    "No bookmarks yet!"
  ) : (
    <div className="bookmarks-main">
      {newBMPosts &&
        newBMPosts.map((mark) => <PostCard postData={mark} key={mark._id} />)}
    </div>
  );
};

export default BookmarkedPosts;
