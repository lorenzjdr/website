import { useEffect, useState } from 'react';
import { getAllBlogs } from '../../Utils/getBlog';
import './BlogHome.css';

const BlogHome = () => {
  const [entries,setEntries] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getAllBlogs();
      setEntries(data);
    }
    fetchData();
  },[]);

  return (
    <div className="blog-container"> 
      <div className="blog-body">
        <h1>Hi welcome to my thoughts!</h1>

        <section className="section">
         <a href='#/blog/0'> Entry 0</a> 
        </section>
      </div>
    </div>
  );
}

export default BlogHome;
