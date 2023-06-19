import { FaHome } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const RightNav = () => {
    
    return (
        <div className="flex-column main-right-nav">
            <NavLink>
            <section className="flex-row">
                <FaHome/>
                <p>Home</p>
            </section>
            </NavLink>
            <NavLink>
            <section className="flex-row">
                <FaHome/>
                <p>Explore</p>
            </section>
            </NavLink>
            <NavLink>
            <section className="flex-row">
                <FaHome/>
                <p>Saved</p>
            </section>
            </NavLink>
            <NavLink>
            <section className="flex-row">
                <FaHome/>
                <p>Liked</p>
            </section>
            </NavLink>
           
           <button>+ New Post</button>
        </div>
    )
}


export default RightNav