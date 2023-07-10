import { useContext } from "react";
import "../assets/logo.png";
import SearchBar from "./SearchBar";
import { FaSun, FaMoon, FaHeart, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { DataContext } from "../Contexts/DataContext";
import actionTypes from "../utils/commands";
import "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { ToastHandler } from "../utils/utils";
const Header = ({ noSearch }) => {
  const {
    data: { theme, loader },
    dataDispatch,
  } = useContext(DataContext);
  const { user,setToken } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLoader = () => {
    dataDispatch({
      type: actionTypes.SET_LOADER,
      payload: loader ? false : true,
    });
  };

  const handleThemeSetter = (theme) => {
    dataDispatch({
      type: actionTypes.SET_THEME,
      payload: theme,
    });
  };

  const handleNavHome = () => {
    nav("/");
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    ToastHandler("success", "Logged out successfully :)");
  };

  return (
    <div
      className={`main-header z-100 ${
        theme === "dark" ? "dark" : "bg-white"
      } gap-16`}
    >
      <p className="flex-row aic gap-16">
        <img
          onClick={handleNavHome}
          src="https://res.cloudinary.com/ionbain/image/upload/v1686625966/samples/cUBergram/assets/logo512_qafcg3.png"
          width="30px"
          alt="logo"
          className="m-pointer"
        />
        {noSearch && (
          <section className="w-30 text-gap-5 search-main">cuberGram</section>
        )}
      </p>

      {!noSearch && (
        <>
          <SearchBar />
          <p className="flex-row gap-16 aic">
            <NavLink
              to="/liked"
              className={({ isActive }) =>
                `nav-link liked-icon-main ${theme === "dark" ? "white" : "black"} ${
                  isActive && "selected"
                }`
              }
            >
              <FaHeart className="fa-icon m-pointer icon-size-l" />
            </NavLink>
          {theme === "light" ? (
            <FaMoon
              className="accent m-pointer icon-size-l"
              onClick={() => handleThemeSetter("dark")}
            />
          ) : (
            <FaSun
              className="accent m-pointer icon-size-l"
              onClick={() => handleThemeSetter("light")}
            />
            )}
            <FiLogOut className="m-pointer icon-size-l hide-on-mobile" onClick={handleLogout} />
            {/* profile */}
            <NavLink
              to={`/profile/${user?._id}`}
              className={({ isActive }) =>
                `m-top-auto hide-on-mobile ${theme === "dark" ? "white" : "black"} ${
                  isActive && "selected"
                }`
              }
            >
              <img src={user.avatar} className="header-avatar-img bor-rad-50" alt="" />
            </NavLink>
          </p>
        </>
      )}

    </div>
  );
};

export default Header;
