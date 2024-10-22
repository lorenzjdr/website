import { ref, get } from "firebase/database";
import { database } from './firebase'; 

export const getBlog = async (id: string) => {
  const blogRef = ref(database, '/blog/' + id); 

  try {
    const snapshot = await get(blogRef);
    if (snapshot.exists()) {
      const blogData = snapshot.val();
      return blogData;
    } else {
      console.log("No data available for this blog post.");
    }
  } catch (error) {
    console.error("Error fetching blog post: ", error);
  }
};

export const getAllBlogs = async() =>{
  const blogRef = ref(database, '/blog/');  
  try {
    const snapshot = await get(blogRef);
    if (snapshot.exists()) {
      const blogData = snapshot.val();
      return blogData;
    } else {
      console.log("Could not retrieve blogs");
    }
  } catch (error) {
    console.error("Error fetching blog post: ", error);
  }
}

