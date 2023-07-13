import { useState } from "react";
import { createContext } from "react";
import { loginService, signInService } from "../services/authenticate";
import actionTypes from "../utils/commands";
import { ToastHandler } from "../utils/utils";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
  const LSToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(LSToken?.token);
  const LSUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(LSUser?.user);
  
  const signUpUser = async ({username, password, firstName, lastName},dispatch) => {
    try{
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signInService({username, password, firstName, lastName});
      if (status === 201) {

        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));

        setToken(encodedToken);
        setUser(createdUser);

        dispatch({
          type:actionTypes.ADD_USER,
          payload:createdUser
        })
    }}
    catch(e) {
      console.error(e)
    }
  }

  const loginUser = async ({username, password}) => {
        console.log(username,password)
        if (username && password !== "") {
          try {
            const res = await loginService({username, password});
            if(res.response?.status===401){
              ToastHandler("warn","Invalid Credentials")
            }else if (res.response?.status ===404){
              ToastHandler("error","User not registered")

            }else{
              const {
                  data: {  encodedToken,foundUser },
                  status,
                } = res
                if (status === 200) {
                    localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
                    localStorage.setItem("user", JSON.stringify({ user: foundUser }));
                  
                    setToken(encodedToken);
                    setUser(foundUser);
                  }
                  return status
                }
          } catch (error) {
            console.log("Error occured in logging in user", error);
            return(error)
          }
        }
      };
     

    return <AuthContext.Provider value={{ token, setToken, LSUser,loginUser, signUpUser, user, setUser }} >
        {children}
    </AuthContext.Provider>
}


export {AuthContext,AuthProvider}