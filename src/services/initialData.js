import axios from "axios"
import actionTypes from "../backend/utils/commands"

const getPosts = async (dispatch) => {
    try{
        const {status,data:posts} = await axios.get("/api/posts")
        if(status===200){
            dispatch({
                type: actionTypes.INITIALIZE_POSTS ,
                payload:posts.posts
            })
        }
    }
    catch (e) {
        console.error(e);
      }
}
const getUsers = async (dispatch) => {
    try{
        const {status,data:users} = await axios.get("/api/users")
        if(status===200){
            dispatch({
                type: actionTypes.INITIALIZE_USERS ,
                payload:users.users
            })
        }
    }
    catch(e){
        console.error(e)
    }
}



export {getPosts,getUsers}