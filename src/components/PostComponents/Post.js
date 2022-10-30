import "./post.css";

function Post() {
  return (
    <div className="post">
      <div className="postInfoImageContainer">
        <img
          src="https://wallpaperaccess.com/full/3379258.jpg"
          alt=""
          className="postImg"
        />
        <figcaption className="postInfoImageCaption">Author</figcaption>
      </div>
      <div className="postInfo">
        <div>
        <div className="postCardFeatures">
          <span className="postCardFeatures__tag">Tech</span>
          <span className="postCardFeatures__time">8mins</span>
        </div>

          <div className="postTitle">Loremaf</div>
          <div className="postDate">1 hour ago</div>
          <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
             atque, exercitationem quibusdam, reiciendis odio laboriosam?
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Post;
