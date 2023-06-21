import { useContext } from "react";
import { FaBookmark, FaComment, FaHeart } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { DataContext } from "../../../Contexts/DataContext";
import { Link, useNavigate } from "react-router-dom";
import {
  actionPostBookmark,
  actionPostDislike,
  actionPostLike,
  actionPostUnbookmark,
} from "../../../services/postTxn";
import "./components.css";
import CommentCard from "./CommentCard";
import { AuthContext } from "../../../Contexts/AuthContext";

const PostCard = ({ postData, showComments }) => {
  const {
    _id: postID,
    username,
    imageURL,
    caption,
    textPost,
    likes: { likeCount },
    comments,
  } = postData && postData;
  const {
    data: { users, bookmarks, posts },
    dataDispatch,
  } = useContext(DataContext);
  const {user} = useContext(AuthContext)
  const foundPost = posts.find(({_id:i})=>i===postID)
  const {likes: { likedBy}} = foundPost
  const { token } = useContext(AuthContext);

  const { avatar: userAvatar, _id: userID } = users.find(
    ({ username: un }) => un.toLowerCase() === username.toLowerCase()
  );

  const isPostBookmarked = bookmarks.some((i) => i === postID);
  const isPostLiked = likedBy.some(({username})=> username===user.username)
  const commentsCount = comments?.length;

  const navigate = useNavigate();
  const handlePostPageRedirect = () => {
    navigate(`/posts/${postID}`);
  };

  // functions for post actions
  const handleBookmark = async () => {
    if (isPostBookmarked) {
      await actionPostUnbookmark(postID, token, dataDispatch);
    } else {
      await actionPostBookmark(postID, token, dataDispatch);
    }
  };
  const handleLike = async (id, token, dataDispatch) => {
    if(isPostLiked){
      await actionPostDislike(id, token, dataDispatch);
    }else{
      await actionPostLike(id, token, dataDispatch);
    }
  };

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
        <p></p>
        <FiMoreVertical className="m-pointer" />
      </div>

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

      {/* user-content */}
      {caption && (
        <p
          className="post-content p-10 text-justify m-pointer"
          onClick={() => handlePostPageRedirect()}
        >
          {" "}
          <span className="f-bold accent"> {username} </span> {caption}
        </p>
      )}
      {!showComments && commentsCount && (
        <p
          className="text-likes text-comments m-pointer p-l-r-10 grey"
          onClick={() => handlePostPageRedirect()}
        >
          View all {commentsCount} comment(s)
        </p>
      )}
      {showComments && comments && (
        <section className="comment-section">
          {comments.map((comment) => (
            <CommentCard commentData={comment} />
          ))}
        </section>
      )}
      <section className="w-100 p-0-0-10-10 grey">4 hours ago</section>
    </div>
  );
};

export default PostCard;
