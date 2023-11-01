import { discussionDetailGql, discussionGql } from './gql'
import dotenv from 'dotenv'

dotenv.config()

const API_URL = 'https://api.github.com/graphql'
const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN
const DISCUSSION_CATEGORY_ID = process.env.DISCUSSION_CATEGORY_ID

export async function getBlogs() {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: discussionGql(DISCUSSION_CATEGORY_ID) }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))

  const discussions = res.data.repository.discussions.nodes

  const posts = discussions.map((discussion) => {
    const { title, discussionUrl, number, bodyHTML, bodyText, createdAt, lastEditedAt, author, labels } = discussion
    const url = `/blog/${number}`
    const authorUrl = author.url
    const authorName = author.login
    const authorAvatar = author.avatarUrl
    const tags = labels.nodes.map((label) => label.name)

    console.log(tags)

    const post = {
      number,
      url,
      discussionUrl,
      title,
      bodyHTML,
      bodyText,
      tags,
      createdAt,
      lastEditedAt,
      author: {
        url: authorUrl,
        name: authorName,
        avatar: authorAvatar
      }
    }

    return post
  })
  return posts
}

export async function getBlogDetail(id) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: discussionDetailGql(id) })
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))

  const discussion = res.data.repository.discussion

  const {
    author,
    createdAt,
    title,
    bodyHTML,
  } = discussion

  const authorUrl = author.url
  const authorName = author.login
  const authorAvatar = author.avatarUrl

  const detail = {
    author: {
      url: authorUrl,
      name: authorName,
      avatar: authorAvatar
    },
    createdAt,
    title,
    bodyHTML,
  }

  return detail
}

