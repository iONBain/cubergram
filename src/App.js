import { Route,Routes } from "react-router-dom";
import Mockman from "mockman-js"
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import Feed from "./Pages/Feed/Feed";
import { useContext } from "react";
import { DataContext } from "./Contexts/DataContext";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader/Loader";
import UserProfile from "./Pages/UserProfile/UserProfile";
import PostPage from "./Pages/PostPage";
import BookmarkedPosts from "./Pages/BookmarkedPosts";
import { useEffect } from "react";
import { getPosts, getUsers } from "./services/getData";
import LeftNav from "./Components/LeftNav";
import RightNav from "./Components/RightNav";
import "./App.css"
import Login from "./Pages/Login";
import BottomNav from "./Components/BottomNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./Contexts/AuthContext";
import LikedPosts from "./Pages/LikedPosts";
import ExplorePosts from "./Pages/ExplorePosts";
import Signup from "./Pages/Signup";

const App = () => {
 
  const {data:{theme,loader},dataDispatch} = useContext(DataContext)
  const {token} = useContext(AuthContext)
  useEffect(()=> {
    getUsers(dataDispatch);
    getPosts(dataDispatch);
  },[])

  // main render
  return (
    <div className={`App ${theme==="dark" && "dark" }`} >
      <ScrollToTop/>
      <ToastContainer/>

      {token 
      ? 
      <>
      <Header/>
      <section className={`main-loader ${!loader && "display-none"}`}>
      <Loader/>
      </section>
      <section className="m-top main-app-section ">
        <LeftNav className="main-left-nav"/>
      <Routes>
        <Route path="/mm" element={<Mockman/>} />
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<ExplorePosts />} />
        <Route path="/profile/:userID" element={<UserProfile />} />
        <Route path="/posts/:postID" element={<PostPage />} />
        <Route path="/bookmark" element={<BookmarkedPosts/>}/>
        <Route path="/liked" element={<LikedPosts/>}/>
      </Routes>
      <RightNav className="main-right-nav"/>
      </section>
      <Footer />
      <BottomNav/>
      </>
      : 
      <>
      <Header noSearch/>
      <Routes>
        <Route path="/signup" element={<Signup/>} />     
        <Route path="*" element={<Login/>} />     
        </Routes>
      </>
      }
    </div>
  );
}

export default App;
