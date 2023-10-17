"use client"

import React from 'react'
import { useEffect, useState } from "react"
import { getBlogDetail } from '@/server/utils/blog-helper'
import BlogHeader from '@/components/Blog/BlogHeader'
import { useRouter } from 'next/navigation'
import { GetServerSideProps } from 'next'

// export const getServerSideProps = async (context) => {
//   const route = context.query.id
//   const id = Number(route)
//   let blogDetail = await getBlogDetail(id)

//   console.log(blogDetail)
//   return {
//     props: {
//       blogDetail
//     },
//   }
// }

const BlogPost = ({ blogDetail }) => {
  // const {author, bodyHTML, createdAt, title} = blogData
  const router = useRouter()
  // const { id } = router.query
  return (
    <div>
      hello
    </div>
  )
}

export default BlogPost

