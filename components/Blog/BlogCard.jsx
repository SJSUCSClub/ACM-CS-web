import React from 'react'
import BlogHeader from './BlogHeader'
import TagCard from './TagCard'

const BlogCard = ({ bodyText, title, createdAt, tags, author }) => {
  const previewText = bodyText.substring(0, 150) + '...'
  return (
    <section className="p-6 bg-slate-100 hover:shadow-lg transition duration-100 ease-linear rounded-lg border sm:w-[320px] max-w-[640px] flex flex-col gap-4 shadow-sm">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p>{previewText}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <TagCard key={tag} tagName={tag} />
        ))}
      </div>

      <BlogHeader author={author} createdAt={createdAt} />
    </section>
  )
}

export default BlogCard