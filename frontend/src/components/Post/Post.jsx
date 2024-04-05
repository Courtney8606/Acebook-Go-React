import "/src/Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className='profilePicture'>
        <div className="icon-posts">
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
      <div className='message-box'>
        <div className='userinfo'>
            {/* <p>On <em><strong>{props.post.created_at}</strong></em> </p>
            <p><em><strong>{props.post.username}</strong></em> said:</p> */}
          </div>
        <article role='posting' className="feed-message" key={props.post._id}>
          {props.post.message}
        </article>
      </div>
    </div>
  );
};

export default Post;
