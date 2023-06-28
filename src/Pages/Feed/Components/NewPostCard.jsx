import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { DataContext } from "../../../Contexts/DataContext";
import { FaCloudUploadAlt } from "react-icons/fa";
const NewPostCard = () => {
  const { user } = useContext(AuthContext);
  const {data:{theme}} = useContext(DataContext)
  const userAvatar = user?.avatar;
  return (
    <div className="flex-col main-post-card">
      <section className="flex-row p-10 w-100 gap-16 aic border-bottom">
        <img src={userAvatar} className="user-avatar-img" alt="" />
        <textarea
          className={`new-post-area-main p-10 ${theme === 'dark' ? "dark" : "bg-white"}`}
          placeholder="share what's newww . .... .."
        ></textarea>
      </section>
      <section className="flex-row aic sp-bw w-100 p-10">
        {/* <FaEmoji /> */}
            <FaCloudUploadAlt className="fa-icon m-pointer"/>
        <button className="btn">Post</button>
      </section>
    </div>
  );
};


export default NewPostCard