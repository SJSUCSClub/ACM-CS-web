import React from 'react'
import BlogHeader from './BlogHeader'
import TagCard from './TagCard'

const BlogCard = ({ bodyText, title, createdAt, tags, author }) => {
  const previewText = bodyText.substring(0, 150) + '...'
  const hasTags = () => {
    tags.length > 0 ? true : false
  }

  return (
    <section className="p-6 bg-gray-100 hover:shadow-lg transition duration-100 ease-linear rounded-lg border sm:w-[320px] w-[480px] flex flex-col gap-4 shadow-sm">
      <div>
        <h2 className="font-bold text-2xl">{title}</h2>
        {hasTags && <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <TagCard key={tag} tagName={tag} />
          ))}
        </div>
        }
      </div>

      <p>{previewText}</p>

      <BlogHeader author={author} createdAt={createdAt} />
    </section>
  )
}

export default BlogCard