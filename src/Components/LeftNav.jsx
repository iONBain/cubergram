import { useContext } from "react";
import { FaBookmark, FaCompass, FaHeart, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";

const LeftNav = () => {
  const {
    data: { theme },
  } = useContext(DataContext);
  return (
    <div className="flex-column main-left-nav">
      <NavLink to = "/"
        className={({ isActive }) =>
          `nav-link ${theme === "dark" ? "white" : "black"} ${
            isActive && "selected f-bold"
          }`
        }
      >
        <section className="flex-row gap-16">
          <FaHome className="icon-size-xl" />
          <p className={`${theme === "dark" ? "white" : "black"} `}>Home</p>
        </section>
      </NavLink>
      <NavLink to="/explore"
        className={({ isActive }) =>
          `nav-link ${theme === "dark" ? "white" : "black"} ${
            isActive && "selected f-bold"
          }`
        }
      >
        <section className="flex-row gap-16">
          <FaCompass className="icon-size-xl"  />
          <p className={`${theme === "dark" ? "white" : "black"} `}>Explore</p>
        </section>
      </NavLink>
      <NavLink to = "/bookmark"
        className={({ isActive }) =>
          `nav-link ${theme === "dark" ? "white" : "black"} ${
            isActive && "selected f-bold"
          }`
        }
      >
        <section className="flex-row gap-16">
          <FaBookmark className="icon-size-xl"  />
          <p className={`${theme === "dark" ? "white" : "black"} `}>Saved</p>
        </section>
      </NavLink>
      <NavLink to = "/liked"
        className={({ isActive }) =>
          `nav-link ${theme === "dark" ? "white" : "black"} ${
            isActive && "selected f-bold"
          }`
        }
      >
        <section className="flex-row gap-16">
          <FaHeart className="icon-size-xl"  />
          <p className={`${theme === "dark" ? "white" : "black"} `}>Liked</p>
        </section>
      </NavLink>

    </div>
  );
};

export default LeftNav;
