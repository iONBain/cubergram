const CommentCard = ({commentData}) => {
    const {userName,comment} = commentData
    return (
        <div>
           <p>{userName}</p>
           <p>{comment}</p>
        </div>
    )
}


export default CommentCard