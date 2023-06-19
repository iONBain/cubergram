import { Route,Routes } from "react-router-dom";
import Mockman from "mockman-js"
// import InfiniteScroll from "./Components/InfiniteScroll";
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import Feed from "./Pages/Feed/Feed";
import { useContext } from "react";
import { DataContext } from "./Contexts/DataContext";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader/Loader";
import UserProfile from "./Pages/UserProfile";
import PostPage from "./Pages/PostPage";
import { useEffect } from "react";
import { getPosts, getUsers } from "./services/initialData";
import LeftNav from "./Components/LeftNav";
import RightNav from "./Components/RightNav";
import "./App.css"
import Login from "./Pages/Login";
import BottomNav from "./Components/BottomNav";

const App = () => {
 

  const {data:{theme,loader},dataDispatch} = useContext(DataContext)

  useEffect(()=> {
    getUsers(dataDispatch);
    getPosts(dataDispatch);
  },[])
  // const key = process.env.REACT_APP_CLOUDINARY_KEY
  // console.log(key,"keyy")
  return (
    <div className={`App ${theme==="dark" && "dark" }`}>
      <ScrollToTop/>
      <Header/>
      <section className={`main-loader ${!loader && "display-none"}`}>
      <Loader/>
      </section>
      <section className="m-top main-app-section">
        {/* <LeftNav className="main-left-nav"/> */}
      <Routes>
        <Route path="/mm" element={<Mockman/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Feed />} />
        <Route path="/profile/:userID" element={<UserProfile />} />
        <Route path="/posts/:postID" element={<PostPage />} />
        {/* <Route path="/login" element={<Feed />} /> */}
      </Routes>
      {/* <RightNav className="main-right-nav"/> */}
      </section>
      <Footer/>
      <BottomNav/>
    </div>
  );
}

export default App;
