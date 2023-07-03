import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Contexts/DataContext";
import "./Component.css";
import actionTypes from "../utils/commands";
import { Link, useLocation } from "react-router-dom";

const FoundUserCard = ({ users, username }) => {
  const {
    avatar: userAvatar,
    _id: userID,
    firstname,
    lastname,
  } = users.find(
    ({ username: un }) => un.toLowerCase() === username.toLowerCase()
  );
  return (
    <div>
      <section className="border-bottom post-user-header flex-row flex-center w-100 sp-bw p-10">
        <Link
          to={`/profile/${userID}`}
          className="text-deco-none flex-row flex-center gap-8"
        >
          <img src={userAvatar} className="user-avatar-img" alt="" />
          <section className="flex-col flex-left">
            <p className="f-bold">
              <span className="accent"> {firstname}</span> {lastname}
            </p>
            <p className="f-smaller grey">@{username}</p>
          </section>
        </Link>
      </section>
    </div>
  );
};

const SearchBar = () => {
  // using context
  const {
    data: { searchedUser, users, theme },
    dataDispatch,
  } = useContext(DataContext);

  // init variables
  const [showSuggestions, setShowSuggestions] = useState(false);
  const location = useLocation();
  const foundUserList = users.filter(
    ({ username, firstname, lastname }) =>
      username.toLowerCase().includes(searchedUser.toLowerCase()) ||
      firstname.toLowerCase().includes(searchedUser.toLowerCase()) ||
      lastname.toLowerCase().includes(searchedUser.toLowerCase())
  );

  // handler functions
  const handleSearch = (e) => {
    dataDispatch({
      type: actionTypes.SET_SEARCHEDUSER,
      payload: e.target.value,
    });
  };

  const closeBox = () => {
    setShowSuggestions(false);
  };
  // callbacks using useEffect
  useEffect(() => {
    if (searchedUser.length !== 0) {
      setShowSuggestions(true);
      const eleSearchMain = document.getElementById("search-main");
      const eleSuggestionsMain = document.getElementById("suggestions-main");
      const eleSearchWidth = eleSearchMain.offsetWidth;
      eleSuggestionsMain.style.width = eleSearchWidth + "px";
    } else {
      setShowSuggestions(false);
    }
  }, [searchedUser]);
  useEffect(() => {
    setShowSuggestions(false);
    dataDispatch({
      type: actionTypes.SET_SEARCHEDUSER,
      payload: "",
    });
  }, [location]);

  // main render return
  return (
    <section className="search-main w-30" id="search-main">
      <input
        type="text"
        placeholder="Search user ..."
        value={searchedUser}
        onInput={handleSearch}
      />
      <section
        id="suggestions-main"
        className={`search-suggestions ${!showSuggestions && "display-none"}  ${
          theme === "dark" ? "dark" : "bg-white"
        }`}
      >
        <section
          className="search-suggestions-overlay"
          onClick={closeBox}
        ></section>
        {foundUserList.length === 0 ? (
          <p className="flex-col flex-center ">No user(s) found!</p>
        ) : (
          foundUserList.map(({ username }) => (
            <FoundUserCard username={username} users={users} key={username} />
          ))
        )}
      </section>
    </section>
  );
};

export default SearchBar;
