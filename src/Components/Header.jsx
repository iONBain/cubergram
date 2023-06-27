import { useContext } from "react";
import "../assets/logo.png";
import SearchBar from "./SearchBar";
import { FaSun, FaMoon, FaHeart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { DataContext } from "../Contexts/DataContext";
import actionTypes from "../utils/commands";
import "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { ToastHandler } from "../utils/utils";
const Header = ({ noSearch }) => {
  const {
    data: { theme, loader },
    dataDispatch,
  } = useContext(DataContext);
  const {setToken} = useContext(AuthContext)
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
    setToken("")
    localStorage.removeItem("login")
    localStorage.removeItem("user")
    ToastHandler("success","Logged out successfully :)")
  };

  return (
    <div
      className={`main-header ${theme === "dark" ? "dark" : "bg-white"} gap-16`}
    >
      {/* <FaArrowLeft /> */}
      <img
        onClick={handleNavHome}
        src="https://res.cloudinary.com/ionbain/image/upload/v1686625966/samples/cUBergram/assets/logo512_qafcg3.png"
        width="30px"
        alt="logo"
        className="m-pointer"
      />
      {noSearch ? <section className="w-30 text-gap-5">cuberGram</section> : (
        <>
          <SearchBar />
          <FaHeart className="m-pointer" />
          <FiLogOut className="m-pointer" onClick={handleLogout} />
        </>
      )}
      {theme === "light" ? (
        <FaMoon
          className="accent m-pointer"
          onClick={() => handleThemeSetter("dark")}
        />
      ) : (
        <FaSun
          className="accent m-pointer"
          onClick={() => handleThemeSetter("light")}
        />
      )}
      {/* <button onClick={handleLoader}>Loader</button> */}
    </div>
  );
};

export default Header;
