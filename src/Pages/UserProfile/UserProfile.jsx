import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import {
  followUser,
  getSingleUser,
  unFollowUser,
  updateUserProfile,
} from "../../services/userTxn";
import "./UserProfile.css";
import { useState } from "react";
import { getSingleUserPosts } from "../../services/getData";
import PostCard from "../Feed/Components/PostCard";
import { AuthContext } from "../../Contexts/AuthContext";
import { ToastHandler } from "../../utils/utils";
import { DataContext } from "../../Contexts/DataContext";
import { useRef } from "react";
// import ModalProfile from "./ModalProfile";

const EditProfileModal = ({
  profileArr,
  editUser,
  theme,
  showEditProfile,
  toggleEditProfile,
  updateProfile,
  handleChangeAvatar,
  newAvatar,
  bioRef,
  websiteRef,
  handleChangeBio,
  handleChangeWebsite,
}) => {
  return (
    <section className={`modal-100 ${!showEditProfile && "display-none"}`}>
      <section
        className="modal-100 overlay-dark"
        onClick={toggleEditProfile}
      ></section>
      <section
        className={`edit-user-main center-box flex-col gap-16 text-left saic p-10 ${
          theme === "dark" ? "dark" : "bg-white"
        }`}
      >
        <h3 className="border-bottom">Editing Profile</h3>
        <img
          src={newAvatar}
          className="profile-avatar-img bor-rad-50"
          alt=""
          srcset=""
        />
        <p className="w-100 text-left">
          <span className="accent w-30">name </span>
          {editUser.firstname} {editUser.lastname}
        </p>
        <h4 className="text-center border-bottom">Choose Avatar</h4>
        <section className="flex-row flex-wrap gap-16">
          {profileArr.map((lnk) => (
            <img
              onClick={() => handleChangeAvatar(lnk)}
              src={lnk}
              key={lnk}
              alt={lnk}
              className="m-pointer bor-rad-50 new-avatar-img"
            />
          ))}
        </section>
        <label htmlFor="bio-inp" className="m-pointer accent border-bottom">
          {" "}
          bio{" "}
        </label>
        <input
          type="text"
          id="bio-inp"
          ref={bioRef}
          onChange={handleChangeBio}
        />
        <label htmlFor="website-inp" className="m-pointer accent border-bottom">
          website
        </label>
        <input
          type="text"
          id="website-inp"
          ref={websiteRef}
          onChange={handleChangeWebsite}
        />
        <p className="flex-row sp-bw gap-16">
          <button className="btn" onClick={toggleEditProfile}>
            {" "}
            Cancel
          </button>
          <button className="btn" onClick={updateProfile}>
            {" "}
            Update
          </button>
        </p>
      </section>
    </section>
  );
};

const UserProfile = () => {
  const { userID } = useParams();
  const [showUser, setShowUser] = useState({});
  const [showUserPosts, setShowUserPosts] = useState();
  const { avatar, followers, following } = showUser;
  const [newAvatar, setNewAvatar] = useState(avatar);
  const { user, token, setToken, setUser } = useContext(AuthContext);
  const {
    data: { theme, newProfiles, users },
    dataDispatch,
  } = useContext(DataContext);
  const amIFollowing = followers?.some(
    ({ username: un }) => un === user.username
  );
  // edit profile handler
  const [showEditProfile, setShowEditProfile] = useState(false);
  const bioRef = useRef();
  const websiteRef = useRef();

  const handleChangeBio = () => {};
  const handleChangeWebsite = () => {};

  const handleOpenEditProfile = () => {
    setNewAvatar(user.avatar);
    bioRef.current.value = user.bio;
    websiteRef.current.value = user.website ? user.website : "";
    toggleEditProfile();
  };
  const toggleEditProfile = () => {
    setShowEditProfile((prev) => !prev);
  };
  const handleChangeAvatar = (linkVal) => {
    setNewAvatar(linkVal);
  };
  const updateProfile = async () => {
    const uData = {
      ...showUser,
      avatar: newAvatar,
      bio: bioRef.current.value,
      website: websiteRef.current.value,
    };
    await updateUserProfile(uData, token, dataDispatch, setUser);
    toggleEditProfile();
    ToastHandler("success", "Profile updated successfully!");
  };

  // get single user found by id
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

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    ToastHandler("success", "Logged out successfully :)");
  };

  useEffect(() => {
    getUserPosts();
  }, [showUser]);
  useEffect(() => {
    getFoundUser();
  }, [userID, user, users]);

  const showModalProfile = (inp) => {
    console.log(inp);
  };

  // main render
  return (
    <div className="main-user-profile flex-col">
      <section className="user-stats-main w-100 flex-row sp-bw">
        {showUser.username !== user.username ? (
          <img src={avatar} className="profile-avatar-img bor-rad-50" alt="" />
        ) : (
          <img
            src={user.avatar}
            className="profile-avatar-img bor-rad-50"
            alt=""
          />
        )}
        <div className="flex-col gap-8 flex-center">
          <p className="f-bold accent">{showUserPosts?.length}</p>
          <p className="f-smaller">{"Posts"}</p>
        </div>
        <div
          className="flex-col gap-8 flex-center m-pointer p-rel"
          onClick={() => showModalProfile("followers")}
        >
          <p className="f-bold accent">{followers?.length}</p>
          <p className="f-smaller">{"Followers"}</p>
          {/* <ModalProfile dataUsers={followers} /> */}
        </div>
        <div
          className="flex-col gap-8 flex-center m-pointer"
          onClick={() => showModalProfile("following")}
        >
          <p className="f-bold accent">{following?.length}</p>
          <p className="f-smaller">{"Following"}</p>
          {/* <ModalProfile dataUsers={following} /> */}
        </div>
      </section>
      {/* details */}
      <section className="flex-row border-bottom w-100 sp-bw">
        <section className="top-user-profile flex-column">
          <p className="accent f-bold">
            {showUser?.firstname} {showUser?.lastname}
          </p>
          <p className="grey f-smaller">{showUser?.username}</p>
          {showUser.username !== user.username ? (
            <>
              <p>{showUser?.bio}</p>
              <a
                href={showUser?.website}
                target="_blank"
                rel="noreferrer"
                className="text-deco-none m-pointer hover-accent"
              >
                {showUser?.website}
              </a>
            </>
          ) : (
            <>
              <p>{user.bio}</p>
              <a
                href={user.website}
                target="_blank"
                rel="noreferrer"
                className="text-deco-none m-pointer hover-accent"
              >
                {user.website}
              </a>
            </>
          )}
        </section>
        {showUser.username !== user.username ? (
          <section>
            <button className="btn btn-follow" onClick={handleFollow}>
              {" "}
              {amIFollowing ? "Unfollow" : "Follow"}
            </button>
          </section>
        ) : (
          <section className="flex-row gap-16 aic">
            <button className="btn btn-follow" onClick={handleOpenEditProfile}>
              Edit
            </button>

            <button className="btn btn-follow" onClick={handleLogout}>
              Logout
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
      {/* edit profile section */}
      <section>
        <EditProfileModal
          editUser={showUser}
          theme={theme}
          toggleEditProfile={toggleEditProfile}
          showEditProfile={showEditProfile}
          updateProfile={updateProfile}
          profileArr={newProfiles}
          newAvatar={newAvatar}
          handleChangeAvatar={(val) => handleChangeAvatar(val)}
          bioRef={bioRef}
          websiteRef={websiteRef}
          handleChangeBio={handleChangeBio}
          handleChangeWebsite={handleChangeWebsite}
        />
      </section>
    </div>
  );
};

export default UserProfile;
