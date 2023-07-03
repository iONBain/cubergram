import { useContext } from "react";
import {
  FaBookmark,
  FaCompass,
  FaHome,
  FaPlusCircle,
  FaUserCircle,
} from "react-icons/fa";
import { DataContext } from "../Contexts/DataContext";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const BottomNav = () => {
  const {
    data: { theme },
  } = useContext(DataContext);
 const {user} = useContext(AuthContext)
  return (
    <div
      className={`flex-row border-top ${
        theme === "dark" ? "dark" : "bg-white"
      } bottom-nav-main `}
    >
      <NavLink to="/" className={({isActive})=> `nav-link ${
        theme === "dark" ? "white" : "black"
      } ${isActive && "selected"}`}>
        <FaHome className="fa-icon m-pointer icon-size-l" />
      </NavLink>
      <NavLink to="/explore" className={({isActive})=> `nav-link ${
        theme === "dark" ? "white" : "black"
      } ${isActive && "selected"}`}>
        <FaCompass className="fa-icon m-pointer icon-size-l" />
      </NavLink>
      <NavLink to="/addpost" className={({isActive})=> `nav-link ${
        theme === "dark" ? "white" : "black"
      } ${isActive && "selected"}`}>
        <FaPlusCircle className="fa-icon m-pointer icon-size-l" />
      </NavLink>
      <NavLink to="/bookmark" className={({isActive})=> `nav-link ${
        theme === "dark" ? "white" : "black"
      } ${isActive && "selected"}`}>
        <FaBookmark className="fa-icon m-pointer icon-size-l" />
      </NavLink>
      <NavLink to={`/profile/${user?._id}`} className={({isActive})=> `nav-link ${
        theme === "dark" ? "white" : "black"
      } ${isActive && "selected"}`}>
        <FaUserCircle className="fa-icon m-pointer icon-size-l" />
      </NavLink>
    </div>
  );
};

export default BottomNav;
