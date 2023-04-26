import React, { useEffect, useState } from 'react'
import { sanityClient } from '../..';
import { BlogCardProps } from '../libs/interface/blog';
import BlogCard from '../ui/molecules/Card/BlogCard';
import Layout from '../ui/organisms/Layout'

export const BlogPage = () => {
  const [blogs, setBlogs] = useState([] as BlogCardProps[]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]`)
      .then((data) => {
        if (data) setBlogs(data)

        console.log(data)
      })
      .catch(console.error)
  }, [])

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1>


        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {
            blogs && blogs.map((blog: BlogCardProps) => (
              <BlogCard key={blog._id} {...blog} />
            ))
          }
        </div>

      </div>
    </Layout>
  )
}
