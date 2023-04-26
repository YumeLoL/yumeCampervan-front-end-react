import React, { useEffect, useState } from 'react'
import { sanityClient } from '../..';
import BlogCard from '../ui/molecules/Card/BlogCard';
import Layout from '../ui/organisms/Layout'

export const BlogPage = () => {
  const [blogs, setBlogs] = useState([{}]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]`)
      .then((data) => {
        if (data) setBlogs(data)
      })
      .catch(console.error)
  }, [])

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1>


        {blogs ? blogs.map((post: any, index) => (
          <BlogCard key={post._id} post={post} />
        )) : <p>There are no posts yet</p>}


      </div>
    </Layout>
  )
}
