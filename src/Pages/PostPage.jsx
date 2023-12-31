import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../services/getData";
import { useState } from "react";
import PostCard from "./Feed/Components/PostCard";
import "./Pages.css";
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";

const PostPage = () => {
  const { postID } = useParams();
  const {
    data: { posts },
  } = useContext(DataContext);
  const [post, setPost] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await getSinglePost(postID);
        setPost(response);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [postID, posts]);
  useEffect(() => console.log(post, "post here"), [post]);
  return (
    <div className="main-post-page">
      {post && <PostCard postData={post} showComments={true} />}
    </div>
  );
};

export default PostPage;
