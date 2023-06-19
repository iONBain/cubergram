import { createContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../Reducers/DataReducer";
import axios from "axios";
import actionTypes from "../backend/utils/commands";

const DataContext = createContext()


const DataProvider = ({children}) => {
    const [state,dispatch] = useReducer(dataReducer,initialState)
    const getData = async () => {
        try{
            const {status:postStatus,data:posts} = await axios.get("/api/posts")
            const {status:usersStatus,data:users} = await axios.get("/api/users")
            console.log(posts.posts,postStatus,"posts")
            console.log(users.users,usersStatus,"users")
            if(postStatus===200){
                dispatch({
                    type: actionTypes.INITIALIZE_POSTS ,
                    payload:posts.posts
                })
            }
            if(usersStatus===200){
                dispatch({
                    type: actionTypes.INITIALIZE_USERS ,
                    payload:users.users
                })
            }
            

        }
        catch (e) {
            console.error(e);
          }
    }

    // useEffect(() => {getData()}, []); 
    useEffect(()=> console.log(state,"Datacontext"),[state])
    return <DataContext.Provider value={{data:state,dataDispatch:dispatch}}>
        {children}
    </DataContext.Provider>
}



export {DataContext,DataProvider}