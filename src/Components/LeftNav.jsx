import { FaBookmark, FaCompass, FaHeart, FaHome } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const LeftNav = () => {
    
    return (
        <div className="flex-column main-left-nav">
            <NavLink className="navLink accent">
            <section className="flex-row gap-8">
                <FaHome />
                <p className="white">Home</p>
            </section>
            </NavLink>
            <NavLink className="navLink accent">
            <section className="flex-row gap-8">
                <FaCompass />
                <p className="white">Explore</p>
            </section>
            </NavLink>
            <NavLink className="navLink accent">
            <section className="flex-row gap-8">
                <FaBookmark />
                <p className="white">Saved</p>
            </section>
            </NavLink>
            <NavLink className="navLink accent">
            <section className="flex-row gap-8">
                <FaHeart />
                <p className="white">Liked</p>
            </section>
            </NavLink>
           
           <button>+ New Post</button>
        </div>
    )
}


export default LeftNav