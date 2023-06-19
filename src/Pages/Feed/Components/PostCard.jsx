import { useContext } from "react";
import { FaBookmark, FaComment, FaHeart } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { DataContext } from "../../../Contexts/DataContext";
import { Link, useNavigate } from "react-router-dom";
import { getSinglePost } from "../../../services/postTxn";
import "./components.css"

const PostCard = ({ postData, showComments }) => {
  const {
    _id: postID,
    username,
    imageURL,
    content,
    likes: { likeCount },
    comments,
  } = postData && postData;
  const {
    data: { users },
  } = useContext(DataContext);

  const commentsCount = comments?.length;

  const userAvatar = users.find(
    ({ username: un }) => un.toLowerCase() === username.toLowerCase()
  )?.avatar;
  const userID = users.find(
    ({ username: un }) => un.toLowerCase() === username.toLowerCase()
  )?._id;

  const navigate = useNavigate();
  const handlePostPageRedirect = () => {
    navigate(`/posts/${postID}`);
  };

  return (
    <div className="flex-col main-post-card">
      {/* header */}
      <p className="border-bottom post-user-header flex-row sp-bw p-10">
        <Link to={`/profile/${userID}`} className="text-deco-none">
          {/* <img src="" alt="" /> */}
          {userAvatar}
          {username}
          {/* {userID} */}
        </Link>
        <FiMoreVertical className="m-pointer" />
      </p>
      {!imageURL && (
        <p
          className="post-content p-10 text-justify m-pointer"
          onClick={() => handlePostPageRedirect()}
        >
          {" "}
          <span className="f-bold accent"> {username} </span> {content}
        </p>
      )}
      {/* image of post */}
      {imageURL && (
        <img
          src={imageURL}
          alt={`${username}'s post here`}
          className="img-profile m-pointer"
          onClick={() => handlePostPageRedirect()}
        />
      )}

      {/* post actions */}
      <section className={`flex-row w-100 p-6-10 sp-bw border-top`}>
        <p className="flex-row gap-8">
          <FaHeart
            className="accent m-pointer"
            onClick={() => getSinglePost(postID)}
          />
          <FaComment className="m-pointer" />
        </p>
        <p>
          <FaBookmark className="m-pointer" />
        </p>
      </section>

      {/* post likes */}
      <p className="text-likes">{likeCount} Likes</p>

      {/* user-content */}
      {imageURL && (
        <p
          className="post-content p-10 text-justify m-pointer"
          onClick={() => handlePostPageRedirect()}
        >
          {" "}
          <span className="f-bold accent"> {username} </span> {content}
        </p>
      )}
      {!showComments && commentsCount && (
        <p
          className="text-likes text-comments m-pointer"
          onClick={() => handlePostPageRedirect()}
        >
          View all {commentsCount} comment(s)
        </p>
      )}
      {showComments && "Comments here"}
    </div>
  );
};

export default PostCard;
