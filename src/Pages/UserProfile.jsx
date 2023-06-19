import {useParams} from "react-router-dom"
import "./Pages.css"

const UserProfile = () => {
    const {userID} = useParams()
    return (
        <div className="main-user-profile">
            
            user id {userID}
        </div>
    )
}


export default UserProfile