import React from "react";
import BlogPage from "@/components/Blog/blog";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) {
    throw new Error('Malumot kelmadi')
  } 
  return res.json() 
}
const Blog = async() => {
  const posts = await getData()
  return (
    <div className="flex m-auto flex-wrap justify-center ">
      {posts.map((post) => (
        <BlogPage post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Blog;
