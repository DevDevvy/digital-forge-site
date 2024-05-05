import blogs from "./blogs";
import "./BlogList.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
const BlogList = () => {
  return (
    <>
      <Header />
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`blog-preview ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <img
              src={blog.image}
              alt="Preview of blog"
              className="blog-image"
            />
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
      <Footer />
    </>
  );
};

export default BlogList;
