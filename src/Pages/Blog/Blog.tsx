import { useParams } from 'react-router-dom';
import './Blog.css'

const Blog = () =>
{
   const {id} = useParams();
   return (
     <div className="blog-post">

       <div className="blog-title">
         <h1>title</h1>
         <p>By  - </p>
       </div>

         <div className = "blog-content">
           <p>content</p>
         </div>

     </div>
   );
}

export default Blog;

