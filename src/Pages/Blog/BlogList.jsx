import blogs from "./blogs";
import "./BlogList.css";
const BlogList = () => {
  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className={`blog-preview ${index % 2 === 0 ? "normal" : "reverse"}`}
        >
          <img src={blog.image} alt="Preview" className="blog-image" />
          <div className="blog-info">
            <h1>{blog.title}</h1>
            <p>{blog.snippet}</p>
            <button
              className="read-more"
              onClick={() => (window.location = `/blog/${blog.id}`)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
