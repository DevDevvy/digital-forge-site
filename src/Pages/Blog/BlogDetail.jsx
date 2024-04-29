import { useParams, Link } from "react-router-dom";
import blogs from "./blogs";
import "./BlogDetail.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const BlogDetail = () => {
  const { id } = useParams();
  const index = blogs.findIndex((blog) => blog.id === id);
  const blog = blogs[index];

  const prevBlog = index > 0 ? blogs[index - 1] : null;
  const nextBlog = index < blogs.length - 1 ? blogs[index + 1] : null;

  return (
    <>
      <Header />
      <div className="blog-container">
        <div className="blog-detail">
          <div className="main-content">
            <img src={blog.mainImage} alt="Main" className="main-blog-image" />
            <div
              dangerouslySetInnerHTML={{
                __html: blog.content.split("</p>")[0] + "</p>",
              }}
              className="first-paragraph"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content.substring(blog.content.indexOf("</p>") + 4),
            }}
          />
          {/* Navigation Arrows */}
          <div className="blog-navigation">
            {prevBlog && (
              <Link to={`/blog/${prevBlog.id}`} className="nav-arrow blog-prev">
                &#8592; Prev Post
              </Link>
            )}
            {nextBlog && (
              <Link to={`/blog/${nextBlog.id}`} className="nav-arrow blog-next">
                Next Post &#8594;
              </Link>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;
