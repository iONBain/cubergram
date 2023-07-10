import { createContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../Reducers/DataReducer";

const DataContext = createContext()

const DataProvider = ({children}) => {
    const [state,dispatch] = useReducer(dataReducer,initialState)
    useEffect(()=> console.log(state,"Datacontext"),[state])

    return <DataContext.Provider value={{data:state,dataDispatch:dispatch}}>
        {children}
    </DataContext.Provider>
}



export {DataContext,DataProvider}