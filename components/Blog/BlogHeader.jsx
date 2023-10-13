import React from 'react'

const BlogHeader = ({ author, createdAt }) => {
  const createdDate = new Date(createdAt)
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const formattedDate = createdDate.toLocaleDateString('en-US', options)

  return (
    <div className="flex items-center gap-2">
      <a href={author.url} target='_blank'><img src={author.avatar} alt={author.avatar} className="rounded-[50%] max-w-[42px] max-h-[42px]" /></a>
      <div className="flex flex-col justify-center">
        <a href={author.url} target='_blank' className="font-bold hover:underline">{author.name}</a>
        <p>{formattedDate}</p>
      </div>
    </div>
  )
}

export default BlogHeader