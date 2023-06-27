import actionTypes from "../utils/commands";
export const initialState = {
    posts: [],
    users: [],
    loader: false,
    bookmarks:[],
    likedPosts:[],
    searchedUser:"",
    theme:"dark",
    // singleUser:{}
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
      case actionTypes.SET_LIKED_POSTS:
        return {
          ...state,
          likedPosts: action.payload
        }
      
    default:
        throw new Error("Error in reducer");
    }
  }
  