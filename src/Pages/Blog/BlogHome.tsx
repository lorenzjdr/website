import { Link } from "react-router-dom";

const BlogHome = () => {
  return (
    <div >
      <h1>Welcome to My Blog!</h1>

      <section>
        <h2>Hopefully I write stuff here lol</h2>

        <ul>
          <li><Link to="/website/blog/1">Travel Blog 1</Link></li>
        </ul>
        
      </section>

    </div>
  );
}

export default BlogHome;
