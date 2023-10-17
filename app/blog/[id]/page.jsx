"use client"

import React from 'react'
import { useEffect, useState } from "react"
import { getBlogDetail } from '@/server/utils/blog-helper'
import BlogHeader from '@/components/Blog/BlogHeader'
import parse from 'html-react-parser'
import detail from './id.module.css'

const BlogPost = ({ params }) => {
  const [blogData, setBlogData] = useState({})


  const fetchBlogData = async () => {
    const blog = await getBlogDetail(params.id)
    setBlogData(blog)
  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  return (
    <div className="max-w-[1280px] flex flex-col gap-6">
      {/* <BlogHeader author={blogData.author} createdAt={blogData.createdAt} /> */}

      <h1 className="text-4xl font-bold">{blogData.title}</h1>
      <div className={`${detail.html} flex flex-col`}>{parse(String(blogData.bodyHTML))}</div>
    </div>
  )
}

export default BlogPost

