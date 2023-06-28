import { useContext } from "react";
import { DataContext } from "../../../Contexts/DataContext";
import { AuthContext } from "../../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import CommentCard from "./CommentCard";
import {
  actionPostBookmark,
  actionPostDelete,
  actionPostDislike,
  actionPostLike,
  actionPostUnbookmark,
} from "../../../services/postTxn";
import { ToastHandler, calculateElapsedTime } from "../../../utils/utils";
import { FaBookmark, FaComment, FaHeart, FaShareAlt } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import "./components.css";
import { useState } from "react";

const PostCard = ({ postData, showComments }) => {
  const {
    _id: postID,
    username,
    imageURL,
    caption,
    textPost,
    createdAt,
    likes: { likeCount },
    comments,
  } = postData && postData;
  const {
    data: { users, bookmarks, posts,theme },
    dataDispatch,
  } = useContext(DataContext);
  const {user} = useContext(AuthContext)
  const foundPost = posts.find(({_id:i})=>i===postID)
  const {likes: { likedBy}} = foundPost
  const elapsedTime = calculateElapsedTime(createdAt)
  const { token } = useContext(AuthContext);

  const { avatar: userAvatar, _id: userID } = users.find(
    ({ username: un }) => un.toLowerCase() === username.toLowerCase()
  );

  const isPostBookmarked = bookmarks.some((i) => i === postID);
  const isPostLiked = likedBy.some(({username})=> username===user.username)
  const commentsCount = comments?.length;

  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const handlePostPageRedirect = () => {
    navigate(`/posts/${postID}`);
  };
  
  // function for header 
  const handleShowOptions = () => {
    setShowOptions(prev => !prev)
  }

  // functions for post actions
  const handleBookmark = async () => {
    if (isPostBookmarked) {
      await actionPostUnbookmark(postID, token, dataDispatch);
      ToastHandler("info", `Unsaved ${foundPost.username}'s post`);
    } else {
      await actionPostBookmark(postID, token, dataDispatch);
      ToastHandler("success", `Saved ${foundPost.username}'s post`);
    }
  };
  const handleLike = async (id, token, dataDispatch) => {
    if(isPostLiked){
      await actionPostDislike(id, token, dataDispatch);
      ToastHandler("default", `🤍 Removed like from ${foundPost.username}'s post`);
    }else{
      await actionPostLike(id, token, dataDispatch);
      ToastHandler("default", `💚 Liked ${foundPost.username}'s post`);
    }
  };
  
  const handleEditPost = () =>{
    
  }
  const handleDeletePost = async () =>{
    await actionPostDelete(postID,token,dataDispatch)
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://cubergram.netlify.app/posts/${postID}`
    );
    ToastHandler("success",`${foundPost.username}'s post link copied !`);
  }

  // main render paint
  return (
    <div className="flex-col main-post-card">
      {/* header */}
      <div className="border-bottom post-user-header flex-row flex-center w-100 sp-bw p-10">
        <Link
          to={`/profile/${userID}`}
          className="text-deco-none flex-row flex-center gap-8"
        >
          <img src={userAvatar} className="user-avatar-img" alt="" />

          <p>{username} {isPostLiked}</p>
        </Link>
        <p className={`show-options-main ${username!==user?.username && "display-none"} ` } onBlur={handleShowOptions} >

        <FiMoreVertical className={`m-pointer`} onClick={handleShowOptions} />
        <section
        className={`show-options-box ${!showOptions && "display-none"}  ${
          theme === "dark" ? "dark" : "bg-white"
        }`}
      >
       <p className="m-pointer" onClick={handleEditPost}>Edit</p>
       <p className="m-pointer" onClick={handleDeletePost}>Delete</p>
      </section>
        </p>
      </div>

      {/* textual post of a user */}
      {textPost ? (
        <p
          className="post-content p-10 text-justify m-pointer"
          onClick={() => handlePostPageRedirect()}
        >
          {textPost}
        </p>
      ) : (
        ""
      )}

      {/* image of post */}
      {imageURL && (
        <img
          src={imageURL}
          alt={`${username}'s post here`}
          className="main-post-img m-pointer"
          onClick={() => handlePostPageRedirect()}
        />
      )}

      {/* post actions */}
      <section className={`flex-row w-100 p-6-10 sp-bw border-top`}>
        <p className="flex-row gap-8">
          <FaHeart
            className={`m-pointer ${isPostLiked && "accent"}`}
            onClick={() => handleLike(postID, token, dataDispatch)}
          />
          <FaComment className="m-pointer" />
          <FaShareAlt className="m-pointer" onClick={handleCopyToClipboard} />
        </p>
        <p>
          <FaBookmark
            onClick={handleBookmark}
            className={`m-pointer ${isPostBookmarked && "accent"}`}
          />
        </p>
      </section>

      {/* post likes */}
      <p className="p-l-r-10 text-likes">{likeCount} Likes</p>

      {/* user-caption */}
      {caption && (
        <p
          className="post-content p-10 text-justify m-pointer"
          onClick={() => handlePostPageRedirect()}
        >
          {" "}
          <span className="f-bold accent"> {username} </span> {caption}
        </p>
      )}

      {/* comment section */}
      {!showComments && commentsCount && (
        <p
          className="text-likes text-comments m-pointer p-l-r-10 grey"
          onClick={() => handlePostPageRedirect()}
        >
          View all {commentsCount} comment(s)
        </p>
      )}
      {/* all comments */}
      {showComments && comments && (
        <section className="comment-section">
          {comments.map((comment) => (
            <CommentCard commentData={comment} />
          ))}
        </section>
      )}
      <section className="w-100 p-0-0-10-10 grey">{elapsedTime}</section>
    </div>
  );
};

export default PostCard;
