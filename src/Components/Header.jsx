import { useContext } from "react";
import "../assets/logo.png"
import SearchBar from "./SearchBar"
import {FaSun,FaMoon, FaHeart, FaArrowLeft } from "react-icons/fa";
import { DataContext } from "../Contexts/DataContext";
import actionTypes from "../backend/utils/commands";
import "../assets/logo.png"
const Header = () => {
    const {data:{theme,loader},dataDispatch} = useContext(DataContext)
    
    const handleLoader = () => {
        dataDispatch({
            type:actionTypes.SET_LOADER,
            payload: loader ? false : true
        })
    }

    const handleThemeSetter = (theme) => {
        dataDispatch({
            type:actionTypes.SET_THEME,
            payload:theme
        })

    }
    return (
        <div className={`main-header ${theme==="dark" ? "dark" : "bg-white"} gap-16`}>
            {/* <FaArrowLeft /> */}
            <img src="https://res.cloudinary.com/ionbain/image/upload/v1686625966/samples/cUBergram/assets/logo512_qafcg3.png" width="30px" alt="logo" />
            <SearchBar/>
            <FaHeart/>
            {
                theme==="light" 
                ? <FaMoon className="accent" onClick={()=>handleThemeSetter("dark")} />
                : <FaSun className="accent" onClick={()=>handleThemeSetter("light")}/>
            }
            {/* <button onClick={handleLoader}>Loader</button> */}
        </div>
    )
}


export default Header