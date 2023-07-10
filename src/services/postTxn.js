import axios from "axios"
import actionTypes from "../utils/commands";

// like and dislike
const actionPostLike = async (id,token,dispatch) => {
  try{

    const {data:{posts},status} = await axios.post(`/api/posts/like/${id}`,{}, {
      headers: {
          authorization: token,
        },
      });
    if(status===201){
      dispatch({
        type:actionTypes.INITIALIZE_POSTS,
        payload:posts
      })
    }
  }
  catch(e){
    console.error(e)
  }

} 
const actionPostDislike = async (id,token,dispatch) => {
  try{
    const {data:{posts},status} = await axios.post(`/api/posts/dislike/${id}`,{}, {
      headers: {
        authorization: token,
      },
    });
    if(status===201){
      dispatch({
        type:actionTypes.INITIALIZE_POSTS,
        payload:posts
      })
    }
  }
  catch(e){
    console.error(e)
  }
} 

// bookmark and unbookmark
const actionPostBookmark = async (postId,token,dispatch) => {
    try{
        const {data:{bookmarks},status} = await axios.post(`/api/users/bookmark/${postId}`,{}, {
            headers: {
              authorization: token,
            },
          });
          console.log(status,bookmarks)
        if(status===200){
          dispatch({
            type: actionTypes.SET_BOOKMARKS,
            payload: bookmarks
        })
        }
    }catch(e) {
        console.error(e)
    }
} 
const actionPostUnbookmark = async (id,token,dispatch) => {
  try{
    const {data:{bookmarks},status} = await axios.post(`/api/users/remove-bookmark/${id}`,{}, {
      headers: {
              authorization: token,
            },
          });
          if(status===200){
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

// add and delete posts
const actionPostDelete = async (id,token,dispatch) => {
  try{
    const {data:{posts},status} = await axios.delete(`/api/posts/${id}`, {
      headers: {
              authorization: token,
            },
          });
          if(status===201){
            // Toasthandler
            dispatch({
              type: actionTypes.INITIALIZE_POSTS,
              payload: posts
            })
          }
        }
        catch(e){
          console.error(e)
        }
}
const actionPostAdd = async (postData, token,dispatch) => {
  try{
    const {data:{posts},status} = await axios.post("/api/posts", { postData:postData }, { headers: { authorization:token } });
          if(status===201){
            dispatch({
              type: actionTypes.INITIALIZE_POSTS,
              payload: posts
            })
          }
  }
        catch(e){
          console.error(e)
        }
}

// edit post [of self only]
const actionEditPost = async (postID,postData, token,dispatch) => {
  try{
    const {data:{posts},status} = await axios.post(`/api/posts/edit/${postID}`, { postData:postData }, { headers: { authorization:token } });
          if(status===201){
            dispatch({
              type: actionTypes.INITIALIZE_POSTS,
              payload: posts
            })
          }
  }
        catch(e){
          console.error(e)
        }
}
// add comment
const actionCommentAdd = async (postID,commentData, token,dispatch) => {
  try{
    const {data:{posts},status} = await axios.post(`/api/comments/add/${postID}`, { commentData:commentData }, { headers: { authorization:token } });
          if(status===201){
            dispatch({
              type: actionTypes.INITIALIZE_POSTS,
              payload: posts
            })
          }
  }
        catch(e){
          console.error(e)
        }
}




export {actionPostBookmark,actionPostUnbookmark,actionPostDislike,actionPostLike,actionPostDelete,actionPostAdd,actionEditPost,actionCommentAdd}