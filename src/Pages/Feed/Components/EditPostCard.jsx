const EditPostCard = ({
  showEditCard,
  toggleEditCard,
  theme,
  editPostRef,
  handleEditPost,
}) => {
  return (
    <section className={`modal-100 ${!showEditCard && "display-none"}`}>
      <section
        className="modal-100 overlay-dark"
        onClick={toggleEditCard}
      ></section>
      <section
        className={`show-edit-post-main center-box flex-col sp-bw aic p-10 gap-16 ${
          theme === "dark" ? "dark" : "bg-white"
        }`}
      >
        <h3 className="border-bottom">Edit your post</h3>
        <textarea
          className="new-post-area-main flex-grow w-100 bor-rad-5 p-10"
          ref={editPostRef}
          placeholder="editing your post..."
        ></textarea>
        <p className="flex-row gap-16">
          <button className="btn" onClick={toggleEditCard}>
            {" "}
            Cancel
          </button>
          <button className="btn" onClick={handleEditPost}>
            {" "}
            Update
          </button>
        </p>
      </section>
    </section>
  );
};

export default EditPostCard;
