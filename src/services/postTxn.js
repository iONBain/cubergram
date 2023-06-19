import axios from "axios"

// return single post
const getSinglePost = async (id) => {
    const {data:{post},status} = await axios.get(`/api/posts/${id}`)
    if(status===200){
        return post
    }
}

//return list of bookmarks
const getUserBookmarkedPosts = async () => {
    const res = await axios.get(`/api/users/bookmark`)
    // if(status===200){
    //     return post
    // }
    console.log(res)
}


// like and dislike
const actionPostLike = async (id,token) => {
    const res = await axios.post(`api/posts/like/${id}`, {
        headers: {
          authorization: token,
        },
      });
    console.log(res)
} 
const actionPostDislike = async (id,token) => {
    const res = await axios.post(`api/posts/like/${id}`, {
        headers: {
            authorization: token,
        },
        });
    console.log(res)
} 

// bookmark and unbookmark

const actionPostBookmark = async (id,token) => {
    const res = await axios.post(`api/users/bookmark/${id}`, {
        headers: {
            authorization: token,
        },
        });
    console.log(res)
    
} 
const actionPostUnbookmark = async (id,token) => {
    const res = await axios.post(`api/users/remove-bookmark/${id}`, {
        headers: {
            authorization: token,
        },
        });
    console.log(res)

} 

// 
// /api/users/edit post,token


export {getSinglePost,getUserBookmarkedPosts,actionPostBookmark,actionPostUnbookmark,actionPostDislike,actionPostLike}