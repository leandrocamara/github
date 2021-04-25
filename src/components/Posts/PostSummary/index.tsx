import Link from 'next/link'
import React from 'react'

import { Container, Small, Title } from './styles'
import Date from '../../../shared/Date'
import { PostInfo } from '../../../services/PostService'

interface PostSummaryProps {
  post: PostInfo
}

const PostSummary: React.FC<PostSummaryProps> = ({ post }) => {
  return (
    <Container>
      <Title>
        <Link href={`/posts/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </Title>
      <Small>
        <Date dateString={post.date} />
      </Small>
    </Container>
  )
}

export default PostSummary
