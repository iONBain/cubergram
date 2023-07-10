const CommentPop = ({
  theme,
  showCommentPop,
  toggleCommentPop,
  commentRef,
  handlePostComment,
}) => {
  return (
    <section className={`modal-100 ${!showCommentPop && "display-none"}`}>
      <section
        className="modal-100 overlay-dark"
        onClick={toggleCommentPop}
      ></section>
      <section
        className={`show-comments-main center-box flex-col sp-bw aic p-10 gap-16 ${
          theme === "dark" ? "dark" : "bg-white"
        }`}
      >
        <h3 className="border-bottom">Post your comment</h3>
        <textarea
          className="new-post-area-main flex-grow w-100 bor-rad-5 p-10"
          ref={commentRef}
          placeholder="type to add comment..."
        ></textarea>
        <p className="flex-row gap-16">
          <button className="btn" onClick={toggleCommentPop}>
            {" "}
            Cancel
          </button>
          <button className="btn" onClick={handlePostComment}>
            {" "}
            Post
          </button>
        </p>
      </section>
    </section>
  );
};

export default CommentPop;
