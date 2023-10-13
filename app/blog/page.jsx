"use client"
import { getBlogs } from "@/server/utils/blog-helper"
import BlogCard from "@/components/Blog/BlogCard"
import { useEffect, useState } from "react"
import { set } from "mongoose"

const BlogPage = () => {
  const [blogData, setBlogData] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await getBlogs()
      for (const blog of blogs) {
        for (const tag of blog.tags) {
          if (!tags.includes(tag)) {
            setTags((prev) => [...prev, tag])
          }
        }
      }
      setBlogData(blogs)
    }
    fetchData()
    console.log(blogData)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-5xl font-bold">All Posts</h1>
      <div className="flex flex-col gap-6">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.number}
            title={blog.title}
            createdAt={blog.createdAt}
            bodyText={blog.bodyText}
            author={blog.author}
            tags={blog.tags}
          />
        ))}
      </div>

    </div>
  )
}

// export async function getServerSideProps() {
//   const blogData = await getBlogs()
//   const tags = []

//   for (const blog of blogs) {
//     for (const tag of blog.tags) {
//       if (!tags.includes(tag)) {
//         tags.push(tag)
//       }
//     }
//   }
//   console.log(tags)
//   return {
//     props: {
//       blogData,
//       tags,
//     },
//   }
// }

export default BlogPage
