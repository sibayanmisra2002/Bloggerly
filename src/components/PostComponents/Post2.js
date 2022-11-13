import "./post.css";

function Post() {
  return (
    <div className="post">
      <div className="postInfoImageContainer">
        <img
          src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png"
          alt=""
          className="postImg"
        />
        <figcaption className="postInfoImageCaption">Author</figcaption>
      </div>
      <div className="postInfo">
        <div>
        <div className="postCardFeatures">
          <span className="postCardFeatures__tag">Art</span>
          <span className="postCardFeatures__time">7mins</span>
        </div>

          <div className="postTitle">12 Powerful Design Tools for Front-End Developers</div>
          <div className="postDate">2 hours ago</div>
          <p className="postDesc">
          An eye-catching design is an effective way to keep the visitors’ attention. I’ve compiled some of the most useful tools that will help you to improve your design workflow.

          With this collection, you will be able to make sketches for your designs, pick color palettes, create gradients, add shadows, make animations, include custom backgrounds, find proper illustrations, experiment with different layout systems and components, and much more. 
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Post;
