import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import {
  followUser,
  getSingleUser,
  unFollowUser,
} from "../../services/userTxn";
import "./UserProfile.css";
import { useState } from "react";
import { getSingleUserPosts } from "../../services/getData";
import PostCard from "../Feed/Components/PostCard";
import { AuthContext } from "../../Contexts/AuthContext";
import { ToastHandler } from "../../utils/utils";

const UserProfile = () => {
  const { userID } = useParams();
  const [showUser, setShowUser] = useState({});
  const [showUserPosts, setShowUserPosts] = useState();
  const { avatar, followers, following } = showUser;
  const { user, token } = useContext(AuthContext);
  const amIFollowing = followers?.some(
    ({ username: un }) => un === user.username
  );
  const getFoundUser = async () => {
    const response = await getSingleUser(userID);
    setShowUser(response);
  };
  const getUserPosts = async () => {
    const postResponse = await getSingleUserPosts(showUser.username);
    setShowUserPosts(postResponse);
  };

  const handleFollow = async () => {
    if (amIFollowing) {
      const res = await unFollowUser(userID, token);
      res === 200 && ToastHandler("info", `Unfollowed ${showUser.username}`);
    } else {
      const res = await followUser(userID, token);
      res === 200 &&
        ToastHandler("success", `Now following ${showUser.username}`);
    }
    getFoundUser();
  };

  useEffect(() => {
    getUserPosts();
  }, [showUser]);
  useEffect(() => {
    getFoundUser();
  }, [userID]);
  return (
    <div className="main-user-profile flex-col">
      <section className="user-stats-main flex-row sp-bw">
        <img src={avatar} className="profile-avatar-img" alt="" />
        {/* <div className="flex-row sp-bw flex-grow"> */}
        <div className="flex-col gap-8 flex-center">
          <p className="f-bold accent">{showUserPosts?.length}</p>
          <p className="f-smaller">{"Posts"}</p>
        </div>
        <div className="flex-col gap-8 flex-center">
          <p className="f-bold accent">{followers?.length}</p>
          <p className="f-smaller">{"Followers"}</p>
        </div>
        <div className="flex-col gap-8 flex-center">
          <p className="f-bold accent">{following?.length}</p>
          <p className="f-smaller">{"Following"}</p>
        </div>
        {/* </div> */}
        {/* <img src={avatar} className="user-avatar-img" alt="" /> */}
      </section>
      {/* details */}
      <section className="flex-row border-bottom sp-bw">
        <section className="top-user-profile flex-column">
          <p className="accent f-bold">
            {showUser?.firstname} {showUser?.lastname}
          </p>
          <p className="grey f-smaller">{showUser?.username}</p>
          <p>{showUser?.bio}</p>
        </section>
        {showUser.username !== user.username && (
          <section>
            <button className="btn-follow" onClick={handleFollow}>
              {" "}
              {amIFollowing ? "Unfollow" : "Follow"}
            </button>
          </section>
        )}
      </section>

      {/* all posts */}
      <section className="flex-col flex-center gap-16">
        {showUserPosts?.length > 0 ? (
          showUserPosts.map((post) => (
            <PostCard postData={post} key={post._id} />
          ))
        ) : (
          <>
            <h2 className="m-top">No Posts Yet ! post something</h2>
            <button>Post</button>
          </>
        )}
      </section>
    </div>
  );
};

export default UserProfile;
