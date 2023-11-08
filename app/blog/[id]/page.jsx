import React from 'react'
import { getBlogDetail } from '@/util/blog-helper'
import BlogHeader from '@/components/Blog/BlogHeader'
import parse from 'html-react-parser'
import detail from './id.module.css'

const BlogPost = async ({ params }) => {

  const blogData = await getBlogDetail(params.id)

  return (
    <div className="max-w-[1280px] flex flex-col gap-6 sm:px-12 px-24">
      <BlogHeader author={blogData.author} createdAt={blogData.createdAt} />

      <h1 className="text-4xl font-bold">{blogData.title}</h1>
      <div className={`${detail.html} flex flex-col`}>{parse(String(blogData.bodyHTML))}</div>
    </div>
  )
}


export default BlogPost

