import { useState } from "react";
import { createContext } from "react";
import { loginService, signInService } from "../services/authenticate";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
  const LSToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(LSToken?.token);
  const LSUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(LSUser?.user);
  
  const signUpUser = async ({username, password, firstName, lastName}) => {
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
    }}
    catch(e) {
      console.error(e)
    }
  }

  const loginUser = async ({username, password}) => {
        console.log(username,password)
        if (username && password !== "") {
          try {
            const {
              data: {  encodedToken,foundUser },
              status,
            } = await loginService({username, password});
            if (status === 200) {
              localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
              localStorage.setItem("user", JSON.stringify({ user: foundUser }));

              setToken(encodedToken);
              setUser(foundUser);
            }
          } catch (error) {
            console.log("Error occured in logging in user", error);
          }
        }
      };
     

    return <AuthContext.Provider value={{ token, setToken, LSUser,loginUser, signUpUser, user, setUser }} >
        {children}
    </AuthContext.Provider>
}


export {AuthContext,AuthProvider}