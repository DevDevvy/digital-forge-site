import { useParams } from "react-router-dom";
import blogs from "./blogs";
import "./BlogDetail.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);
  return (
    <>
      <Header />
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
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
