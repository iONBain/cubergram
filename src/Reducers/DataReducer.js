import actionTypes from "../utils/commands";
const newProfiles = ["https://res.cloudinary.com/ionbain/image/upload/v1688913428/samples/cUBergram/avatars/new_profile_7_lwljtm.jpg","https://res.cloudinary.com/ionbain/image/upload/v1688913428/samples/cUBergram/avatars/new_profile_8_yhghw8.jpg","https://res.cloudinary.com/ionbain/image/upload/v1688913427/samples/cUBergram/avatars/new_profile_2_wrziz5.webp","https://res.cloudinary.com/ionbain/image/upload/v1688913427/samples/cUBergram/avatars/new_profile_4_sjwsmk.jpg","https://res.cloudinary.com/ionbain/image/upload/v1688913427/samples/cUBergram/avatars/new_profile_6_vv1mtv.jpg","https://res.cloudinary.com/ionbain/image/upload/v1688913427/samples/cUBergram/avatars/new_profile_3_e9hx4f.jpg","https://res.cloudinary.com/ionbain/image/upload/v1688913427/samples/cUBergram/avatars/new_profile_1_wwhylg.jpg","https://res.cloudinary.com/ionbain/image/upload/v1688913427/samples/cUBergram/avatars/new_profile_5_yfdsdn.png"]
export const initialState = {
    posts: [],
    users: [],
    loader: false,
    bookmarks:[],
    likedPosts:[],
    searchedUser:"",
    theme:"dark",
    sortBy:"like",
    newProfiles:newProfiles
  };
  
  export function dataReducer(state, action) {
    switch (action.type) {
      case actionTypes.INITIALIZE_POSTS:
        return {
          ...state,
          posts: action.payload.map((post) => ({
            ...post,
          })),
        };
  
      case actionTypes.INITIALIZE_USERS:
        return {
          ...state,
          users: action.payload.map((user) => ({
            ...user,
          })),
        };
      case actionTypes.SET_THEME:
        return {
          ...state,
          theme: action.payload
        };
      case actionTypes.SET_SEARCHEDUSER:
        return {
          ...state,
          searchedUser: action.payload
        }
      case actionTypes.SET_LOADER:
        return {
          ...state,
          loader: action.payload
        }
      case actionTypes.SET_BOOKMARKS:
        return {
          ...state,
          bookmarks: [...action.payload]
        }
      case actionTypes.SET_SORT:
        return {
          ...state,
          sortBy: action.payload
        }
        
      case actionTypes.UPDATE_USER:
        return {
          ...state,
          users: state.users.map(user=> user.username === action.payload.username ? {...action.payload} : user)
        }
        
      case actionTypes.POST_COMMENT:
        return {
          ...state,
          posts: state.posts.map(p=> p._id===action.postID ? {...p, comments:[...p.comments,action.payload]} : p)
        }

  
    default:
        throw new Error("Error in reducer");
    }
  }
  