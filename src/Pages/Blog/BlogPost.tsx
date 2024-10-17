import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { getBlog } from '../../Utils/getBlog';
import EmptyPage from '../../components/Empty/EmptyPage';
import './BlogPost.css'; 

interface BlogPostData {
  title: string;
  author: string;
  date: string;
  content: string;
  content2?: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>(); 
  const [blogData, setBlogData] = useState<BlogPostData | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (id) {
        const data = await getBlog(id); 
        setBlogData(data);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (!blogData) {
    return <EmptyPage message='LOADINGGGGGG....'/>;
  }

  return (
    <div className="blog-post"> 
      <div className="blog-title"> 
        <h1>{blogData.title}</h1>
        <p>By {blogData.author} - {blogData.date}</p>
      </div>
      <div className="blog-content"> 
        <pre>{blogData.content}</pre>
        <pre>{blogData.content2}</pre>
      </div>
    </div>
  );
};

export default BlogPost;
