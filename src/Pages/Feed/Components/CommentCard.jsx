const CommentCard = ({ commentData }) => {
  const { username, comment } = commentData;

  return (
    <div>
      <p>
        {" "}
        <span className="f-bold accent">{username} </span>
        {comment}
      </p>
    </div>
  );
};

export default CommentCard;
