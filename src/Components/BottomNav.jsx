import { FaBookmark, FaCompass, FaHome, FaPlusCircle, FaUserCircle } from "react-icons/fa"

const BottomNav = () => {
    return (
        <div className="flex-row sp-bw">
           <FaHome/>
           <FaCompass/>
           <FaPlusCircle/>
           <FaBookmark/>
           <FaUserCircle/>
        </div>
    )
}


export default BottomNav