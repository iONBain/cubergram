import {useParams} from "react-router-dom"
import { useEffect } from "react"
import { getSingleUser } from "../../services/userTxn"
import "./UserProfile.css"
import { useState } from "react";
import { getSingleUserPosts } from "../../services/getData";
import PostCard from "../Feed/Components/PostCard";

const UserProfile = () => {
    const {userID} = useParams()
    const [showUser,setShowUser] = useState({})
    const [showUserPosts,setShowUserPosts] = useState()
    const {avatar,followers,following } = showUser


    const getFoundUser= async () =>{
        const response = await getSingleUser(userID)
        setShowUser(response);
        // setShowUserPosts({})
    } 
    const getUserPosts = async () => {
        const postResponse = await getSingleUserPosts(showUser.username)
        setShowUserPosts(postResponse)
        console.log(postResponse, "hi")
    }

    useEffect(()=>{getUserPosts()},[showUser])
    useEffect(()=>{getFoundUser()},[userID])
    return (
        <div className="main-user-profile flex-col">
            <section className="user-stats-main flex-row sp-bw">

                <img src={avatar} className="profile-avatar-img" alt="" />
                {/* <div className="flex-row sp-bw flex-grow"> */}
                    <div className="flex-col gap-8 flex-center">
                        <p className="f-bold accent">{showUserPosts?.length}</p>
                        <p className="f-smaller">{"Posts"}</p>
                    </div>
                    <div className="flex-col gap-8 flex-center">
                        <p className="f-bold accent">{followers?.length}</p>
                        <p className="f-smaller">{"Followers"}</p>
                    </div>
                    <div className="flex-col gap-8 flex-center">
                        <p className="f-bold accent">{following?.length}</p>
                        <p className="f-smaller">{"Following"}</p>
                    </div>
                {/* </div> */}
                {/* <img src={avatar} className="user-avatar-img" alt="" /> */}
            </section>
            <section className="top-user-profile flex-column">
                <p className="accent f-bold">

                {showUser?.firstname} {" "} {showUser?.lastname}
                </p>
                <p className="grey f-smaller">

                {showUser?.username}
                </p>
                <p>

                {showUser?.bio}
                </p>
                
            </section>
            <section className="flex-col flex-center">
                {showUserPosts?.length>0 && showUserPosts.map(post=> 
                <PostCard postData={post}/>
                ) 
            }
            </section>
        </div>
    )
}


export default UserProfile