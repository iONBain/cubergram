import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useEffect } from "react";
import "./Pages.css";
import { useRef } from "react";
import { ToastHandler } from "../utils/utils";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { token, setToken, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const loginPasswordRef = useRef();
  const loginUserRef = useRef();

  const handleNavToSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = async () => {
    try {
      const bodyLoginTest = {
        username: loginUserRef.current.value,
        password: loginPasswordRef.current.value,
      };
      await loginUser(bodyLoginTest);
      ToastHandler("success", `Logged in successfully`);
      setToken(localStorage.getItem("login"));
    } catch (e) {
      console.error(e);
    }
  };
  const handleTestUser = async () => {
    try {
      const bodyLoginTest = {
        username: "neoGrammer",
        password: "neoG@neoG",
      };
      await loginUser(bodyLoginTest);
      ToastHandler("success", `Logged in successfully`);
      setToken(localStorage.getItem("login"));
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => console.log("token", token), [token]);
  return (
    <div className="login-main m-top flex-col aic gap-16 ">
      <section className="login-box flex-col gap-16">
        <p className="w-100 text-center">
          <img
            src="https://res.cloudinary.com/ionbain/image/upload/v1688974520/loginGif_lta0iy.gif"
            width="150px"
            className="login-img"
            alt=""
            srcset=""
          />
        </p>
        <label htmlFor="login-username" className="hover-accent m-pointer">
          Username:
        </label>
        <input type="text" placeholder="Enter Username" id="login-username" ref={loginUserRef} />
        <label htmlFor="login-password" className="hover-accent m-pointer">
          Password:
        </label>
        <input type="password" placeholder="Enter Password" id="login-password" ref={loginPasswordRef} />
        <button onClick={handleLogin} className="btn">
          Log In
        </button>
        <button onClick={handleTestUser} className="btn">
          Log In as Guest
        </button>
        <p className="text-center f-smaller">
          Dont have an account?{" "}
          <span
            className="m-pointer accent border-bottom "
            onClick={handleNavToSignUp}
          >
            Sign up here
          </span>{" "}
        </p>
      </section>
    </div>
  );
};

export default Login;
