import axios from "axios"

const followUser = async (userID,token) => {
    try{

        const res = await axios.post(`/api/users/follow/${userID}`,{},{
            headers: {
                authorization: token,
            }})
        return res.status
    }
    catch(e){
            console.error(e)
        }
}

const unFollowUser = async (userID,token) => {
    try{

        const res = await axios.post(`/api/users/unfollow/${userID}`,{},{
            headers: {
                authorization: token,
            }})
            return res.status
        }catch(e){
        console.error(e)
    }
}
        

// specific user page txns
const getSingleUser = async (userID) => {
    try{
        const {status,data:{user}} = await axios.get(`/api/users/${userID}`)
        if(status===200){
            return user
        }
    }
    catch(e){
        console.error(e)
    }
}



export {followUser,unFollowUser,getSingleUser}
