import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { DataContext } from "../Contexts/DataContext";
import { useEffect } from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const Signup = () => {
  const { token, signUpUser, setToken } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);
  const suFirstnameRef = useRef();
  const suLastnameRef = useRef();
  const suMailRef = useRef();
  const suUsernameRef = useRef();
  const suPasswordRef = useRef();

  const navigate = useNavigate();
  const handleNavToLogin = () => {
    navigate("/");
  };

  const handleSignUp = async () => {
    try {
      const bodySignin = {
        firstname: suFirstnameRef.current.value,
        lastname: suLastnameRef.current.value,
        mail: suMailRef.current.value,
        username: suUsernameRef.current.value,
        password: suPasswordRef.current.value,
        avatar:"https://res.cloudinary.com/ionbain/image/upload/v1688913427/samples/cUBergram/avatars/new_profile_4_sjwsmk.jpg"
      };
      await signUpUser(bodySignin,dataDispatch);
      setToken(localStorage.getItem("signup"));
    } catch (e) {
      console.error(e);
    }
    navigate("/");
  };
  useEffect(() => console.log("token", token), [token]);
  return (
    <div className="login-main m-top flex-col aic gap-16 ">
      <section className="login-box flex-col aic gap-16 sp-bw">
        <h2 className="border-bottom">SIGN UP</h2>

        {/* form for signup user */}
        <section className="flex-col gap-8">
          <label
            htmlFor="signup-firstname"
            className="hover-accent m-pointer w-100 sp-bw flex-row gap-16 aic"
          >
            FirstName:
            <input type="text" id="signup-firstname" ref={suFirstnameRef} />
          </label>
          <label
            htmlFor="signup-lastname"
            className="hover-accent m-pointer w-100 sp-bw flex-row gap-16 aic"
          >
            LastName:
            <input type="text" id="signup-lastname" ref={suLastnameRef} />
          </label>
          <label
            htmlFor="signup-mail"
            className="hover-accent m-pointer w-100 sp-bw flex-row gap-16 aic"
          >
            Mail:
            <input type="text" id="signup-mail" ref={suMailRef} />
          </label>
          <label
            htmlFor="signup-username"
            className="hover-accent m-pointer w-100 sp-bw flex-row gap-16 aic"
          >
            Username:
            <input type="text" id="signup-username" ref={suUsernameRef} />
          </label>
          <label
            htmlFor="signup-password"
            className="hover-accent m-pointer w-100 sp-bw flex-row gap-16 aic"
          >
            Password:
            <input type="password" id="signup-password" ref={suPasswordRef} />
          </label>
        </section>
        <button onClick={handleSignUp} className="btn">
          Sign up
        </button>
        <p className="f-smaller">
          Already have an account?{" "}
          <span
            className="accent border-bottom m-pointer"
            onClick={handleNavToLogin}
          >
            Log In here
          </span>{" "}
        </p>
      </section>
    </div>
  );
};

export default Signup;
