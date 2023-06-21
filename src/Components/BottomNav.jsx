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

const BottomNav = () => {
  const {
    data: { theme },
  } = useContext(DataContext);
 
  return (
    <div
      className={`flex-row border-top ${
        theme === "dark" ? "dark" : "bg-white"
      } bottom-nav-main`}
    >
      <NavLink to="/" className={({isActive})=> `nav-link ${isActive && "selected"}`}>
        <FaHome className="fa-icon m-pointer" />
      </NavLink>
      <NavLink to="/explore" className={({isActive})=> `nav-link ${isActive && "selected"}`}>
        <FaCompass className="fa-icon m-pointer" />
      </NavLink>
      <NavLink to="/addpost" className={({isActive})=> `nav-link ${isActive && "selected"}`}>
        <FaPlusCircle className="fa-icon m-pointer" />
      </NavLink>
      <NavLink to="/bookmark" className={({isActive})=> `nav-link ${isActive && "selected"}`}>
        <FaBookmark className="fa-icon m-pointer" />
      </NavLink>
      <NavLink to="/profile" className={({isActive})=> `nav-link ${isActive && "selected"}`}>
        <FaUserCircle className="fa-icon m-pointer" />
      </NavLink>
    </div>
  );
};

export default BottomNav;
