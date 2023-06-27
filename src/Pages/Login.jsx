import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useEffect } from "react";
import "./Pages.css"
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
        <div className="login-main m-top flex-col aic gap-16 ">
            <section className="login-box flex-col aic gap-8" >
            <img src="https://res.cloudinary.com/ionbain/image/upload/v1687836468/samples/cUBergram/assets/loginProfile_kweinv.jpg" width="150px" className="login-img" alt="" srcset="" />
                Login here
            <button onClick={handleTestUser} className="btn">Test User</button>
            </section>
        </div>
    )
}


export default Login