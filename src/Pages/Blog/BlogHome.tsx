import { Link } from "react-router-dom";
import './BlogHome.css';

const BlogHome = () => {
  return (
    <div className="blog-body" >
      <h1>Hi welcome to my thoughts!</h1>

      <section className="section">
        <h2>Hopefully I write stuff here lol</h2>

        <ul className="list">
          <li><Link to="/website/blog/1">Blog 1</Link></li>
        </ul>

      </section>

    </div>
  );
}

export default BlogHome;
