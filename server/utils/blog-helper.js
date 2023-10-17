import { discussionDetailGql, discussionGql } from './gql'


const API_URL = 'https://api.github.com/graphql'
const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN
const DISCUSSION_CATEGORY_ID = process.env.DISCUSSION_CATEGORY_ID

export async function getBlogs() {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer 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`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: discussionGql('DIC_kwDOKP9wN84CaFwd') }),
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
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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`
    },
    body: JSON.stringify({ query: discussionDetailGql('DIC_kwDOKP9wN84CaFwd') })
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))

  const discussion = res.data.repository.discussion.nodes

  const {
    author: { url, login, avatarUrl },
    createdAt,
    title,
    bodyHTML,
  } = discussion

  const detail = {
    author: { url, name: login, avatar: avatarUrl },
    createdAt,
    title,
    bodyHTML,
  }
  return detail
}

