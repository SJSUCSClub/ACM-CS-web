"use client"

import React from 'react'
import { useEffect, useState } from "react"
import { getBlogDetail } from '@/server/utils/blog-helper'
import BlogHeader from '@/components/Blog/BlogHeader'
import { useRouter } from 'next/navigation'

const BlogPost = () => {
  // const {author, bodyHTML, createdAt, title} = blogData
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      {id}
    </div>
  )
}

export default BlogPost

// export const getServerSideProps = async (context) => {
//   const route = context.query.id
//   const id = Number(route)
//   let blogDetail = await getBlogDetail(id)
//   return {
//     props: {
//       blogData: blogDetail,
//     },
//   }
// }