import { useContext, useRef } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { DataContext } from "../../../Contexts/DataContext";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { actionPostAdd } from "../../../services/postTxn";
import { ToastHandler, trimAndMaintainFormat } from "../../../utils/utils";
const NewPostCard = () => {
  const { user, token } = useContext(AuthContext);
  const {
    data: { theme },
    dataDispatch,
  } = useContext(DataContext);
  const userAvatar = user?.avatar;
  const [image, setImage] = useState("");
  const postTextRef = useRef();

  const handleUploadImage = async () => {
    ToastHandler("info", "Please wait while we upload your image")
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "cubergram");
    data.append("cloud_name", "ionbain");
    const urlPost = "https://api.cloudinary.com/v1_1/ionbain/image/upload";
    try {
      const res = await fetch(urlPost, {
        method: "post",
        body: data,
      });
      console.log(res,"from res")
      if (res.status === 200) {
          const response = await res.json();
          console.log(response, "from upload img");
        return response.url;
        // await actionPostAdd("hello world", token, dataDispatch);
      } else {
        console.error("cannot upload image");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleUploadPost = async () => {
    const bodyText = postTextRef.current.value;
    if (image !== "") {
      const url = await handleUploadImage();
      await actionPostAdd(
        { caption: bodyText, imageURL: url },
        token,
        dataDispatch
      );
      postTextRef.current.value = "";
      handleRemoveImage();
      ToastHandler("success", "Uploaded your post!");
    } else if (bodyText !== "") {
      await actionPostAdd({ textPost: bodyText }, token, dataDispatch);
      postTextRef.current.value = "";
      ToastHandler("success", "Successully posted!");
    } else {
      ToastHandler("warn", "Enter something to post");
    }
  };

  const handleRemoveImage = () => {
    setImage("");
  };
  return (
    <div className="flex-col main-post-card">
      <section className="flex-row p-10 w-100 gap-16 aic border-bottom">
        <img src={userAvatar} className="user-avatar-img" alt="" />
        <textarea
          className={`new-post-area-main p-10 ${
            theme === "dark" ? "dark" : "bg-white"
          }`}
          placeholder="share what's newww . . ."
          ref={postTextRef}
        ></textarea>
      </section>
      <section className="flex-row aic sp-bw w-100 p-10">
        {/* <FaEmoji /> */}
        <p className="flex-row gap-8">
          <label htmlFor="file-input" className="file-label flex-row gap-8">
            <FaCloudUploadAlt className="fa-icon m-pointer" />
            {image && trimAndMaintainFormat(image.name)}
          </label>
          <span>
            {image && (
              <MdCancel
                onClick={handleRemoveImage}
                className="fa-icon m-pointer accent"
              />
            )}
          </span>
        </p>
        <input
          type="file"
          id="file-input"
          className="display-none"
          onChange={(e) => {
            const fileImg = e.target.files[0];
            console.log(e.target.files);
            if (
              fileImg.type === "image/png" ||
              fileImg.type === "image/jpeg" ||
              fileImg.type === "image/jpg"
            ) {
              // console.log(image,"image here")
              setImage(e.target.files[0]);
            } else {
              ToastHandler(
                "warn",
                "Image format should be either jpeg/ jpg/ png"
              );
            }
          }}
        ></input>
        <button className="btn" onClick={handleUploadPost}>
          Post
        </button>
      </section>
    </div>
  );
};

export default NewPostCard;

// import { useState } from "react";
// import "./styles.css";
// import axios from "axios";

// export default function App() {
//   const [image, setImage] = useState("");
//   const handleUploadImage = async () => {
//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "cubergram");
//     data.append("cloud_name", "ionbain");
//     const urlPost = "https://api.cloudinary.com/v1_1/ionbain/image/upload";
//     try {
//       const res = await fetch(urlPost, {
//         method: "post",
//         body: data
//       });
//       const response = await res.json()
//       console.log(response);
//     } catch (e) {
//       console.error(e);
//     }

//   };
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//       <button onClick={handleUploadImage}>upload</button>
//     </div>
//   );
// }
