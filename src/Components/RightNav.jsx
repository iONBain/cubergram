import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { AuthContext } from "../Contexts/AuthContext";
import { followUser, getSingleUser, unFollowUser } from "../services/userTxn";
import { ToastHandler } from "../utils/utils";
import { useState } from "react";

const FollowUserCard = ({ user }) => {
  const {
    avatar: userAvatar,
    _id: userID,
    firstname,
    lastname,
    username,
  } = user;
  const { user: mUser, token } = useContext(AuthContext);
  const [showUser, setShowUser] = useState(user);
  const amIFollowing = showUser.followers?.some(
    ({ username: un }) => un === mUser.username
  );
  const getFoundUser = async () => {
    const response = await getSingleUser(userID);
    setShowUser(response);
  };
  const handleFollow = async () => {
    if (amIFollowing) {
      const res = await unFollowUser(userID, token);
      res === 200 && ToastHandler("info", `Unfollowed ${username}`);
    } else {
      const res = await followUser(userID, token);
      res === 200 && ToastHandler("success", `Now following ${username}`);
    }
    getFoundUser();
  };

  // render the main list of users
  return (
    username !== mUser.username && (
      <div>
        <section className="post-user-header flex-row flex-center w-100 sp-bw p-10">
          <Link
            to={`/profile/${userID}`}
            className="text-deco-none flex-row flex-center gap-8"
          >
            <img src={userAvatar} className="user-avatar-img" alt={username} />
            <section className="flex-col flex-left">
              <p className="f-bold f-smaller">
                {firstname} {lastname.slice(0, 1)}
              </p>
              <p className="f-smaller grey">@{username}</p>
            </section>
          </Link>
          <button className="btn" onClick={handleFollow}>
            {" "}
            {amIFollowing ? "Unfollow" : "Follow"}
          </button>
        </section>
      </div>
    )
  );
};

const RightNav = () => {
  const {
    data: { users },
  } = useContext(DataContext);

  //  main render
  return (
    <div className="flex-column main-right-nav hide-on-mobile">
      <h3>Suggestions</h3>
      {users && users.map((u) => <FollowUserCard user={u} key={u.username} />)}
    </div>
  );
};

export default RightNav;
