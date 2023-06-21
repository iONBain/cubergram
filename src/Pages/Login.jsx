import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useEffect } from "react";

const Login = () => {
    const { token, setToken, loginUser, signUpUser } = useContext(AuthContext);
  

    const handleTestUser = async () => {
        try{
            const bodyLoginTest = {
                username: "neoGrammer",
                password: "neoG@neoG",
              };
              await loginUser(bodyLoginTest);
              setToken(localStorage.getItem("login"));
             
        }
        catch(e){
            console.error(e)
        }
    }
    useEffect(()=> console.log("token",token), [token])
    return (
        <div>
            <button onClick={handleTestUser}>Test User</button>
        </div>
    )
}


export default Login