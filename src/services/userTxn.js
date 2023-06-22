import axios from "axios"
import actionTypes from "../utils/commands"

const followUser = async (userID,token) => {
    const res = await axios.post(`/api/users/follow/${userID}`,{
        headers: {
            authorization: token,
        }})
    console.log(res)
}

const unFollowUser = async (userID,token) => {
    const res = await axios.post(`/api/users/unfollow/${userID}`,{
        headers: {
            authorization: token,
        }})
    console.log(res)
}


// specific user page txns
const getSingleUser = async (userID) => {
    try{
        const {status,data:{user}} = await axios.get(`/api/users/${userID}`)
        if(status===200){
            // dispatch({
            //     type:actionTypes.SET_SINGLE_USER,
            //     payload:user
            // })
            return user
        }
        // console.log(status,user)
    }
    catch(e){
        console.error(e)
    }
}



export {followUser,unFollowUser,getSingleUser}
