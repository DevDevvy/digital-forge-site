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
    <div className="blog-preview">
      <img
        src={selectedBlog.image}
        alt={selectedBlog.title}
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />
      <div className="blog-info">
        <h2>{selectedBlog.title}</h2>
        <p>{selectedBlog.snippet}</p>
      </div>
    </div>
  );
};

export default SingleBlogPreview;
