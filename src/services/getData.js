import axios from "axios"
import actionTypes from "../utils/commands"

// return all posts
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

// return all users
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

// return single post
const getSinglePost = async (id) => {
    const {data:{post},status} = await axios.get(`/api/posts/${id}`)
    if(status===200){
        return post
    }
}

// return list of bookmarks
const getUserBookmarkedPosts = async (token,dispatch) => {
    try{

        const {data:{bookmarks},status} = await axios.get(`/api/users/bookmark`, {headers: {authorization:token}})
        if(status===200){
            // return bookmarks
            dispatch({
                type: actionTypes.SET_BOOKMARKS,
                payload: bookmarks
            })
        }
    }
    catch(e){
        console.error(e)
    }

}

// return list of user's posts
const getSingleUserPosts = async (username) => {
    try{
        console.log(username)
        const {data:{posts},status} = await axios.get(`/api/posts/user/${username}`)
        const ress = await axios.get(`/api/posts/user/${username}`)
        console.log(ress)
        if(status===200){
            return posts
        }
    }
    catch(e){
        console.error(e)
    }

}



export {getPosts,getUsers,getSinglePost,getUserBookmarkedPosts,getSingleUserPosts}