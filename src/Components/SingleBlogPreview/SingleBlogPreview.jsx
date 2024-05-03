import { useState, useEffect } from "react";
import "./SingleBlogPreview.css";
const SingleBlogPreview = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    if (blogs.length) {
      const randomIndex = Math.floor(Math.random() * blogs.length);
      setSelectedBlog(blogs[randomIndex]);
    }
  }, [blogs]); // Dependency on the blogs array to update when blogs change

  if (!selectedBlog) {
    return <div>No blogs available</div>;
  }

  return (
    <div className="single-blog-preview">
      <img
        id="blog-preview-photo"
        src={selectedBlog.image}
        alt={selectedBlog.title}
      />
      <div className="single-blog-info">
        <h2>{selectedBlog.title}</h2>
        <p>{selectedBlog.snippet}</p>
        <button
          id="visit-blog"
          onClick={() => (window.location = `/blog/${selectedBlog.id}`)}
        >
          {" "}
          Visit Blog{" "}
        </button>
      </div>
    </div>
  );
};

export default SingleBlogPreview;
