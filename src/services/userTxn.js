import axios from "axios"

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
        const res = await axios.get(`/api/users/${userID}`)
    }
    catch(e){
        console.error(e)
    }
}



export {followUser,unFollowUser,getSingleUser}
