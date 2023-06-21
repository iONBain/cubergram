import {useParams} from "react-router-dom"
import "./Pages.css"

const UserProfile = () => {
    const {userID} = useParams()
    return (
        <div className="main-user-profile flex-col">
            
            user id {userID}
        </div>
    )
}


export default UserProfile