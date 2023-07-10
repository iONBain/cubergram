import axios from "axios"
import actionTypes from "../utils/commands"

// follow and unfollow a user
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

// update self user profile
const updateUserProfile = async (userData,token,dispatch,setUser) => {
    try{
      const {data:{user},status} = await axios.post("/api/users/edit", { userData:userData }, { headers: { authorization:token } });
            if(status===201){
              dispatch({
                type: actionTypes.UPDATE_USER,
                payload: user
              })
            }
            localStorage.setItem("user", JSON.stringify({ user: user }));
            setUser(user)
    }
          catch(e){
            console.error(e)
          }
  }
  

export {followUser,unFollowUser,getSingleUser,updateUserProfile}
