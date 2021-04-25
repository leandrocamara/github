import React from 'react'

import { Container } from './styles'
import Date from '../../../shared/Date'
import { PostInfo } from '../../../services/PostService'

interface PostDetailProps {
  post: PostInfo
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
  <Container>
    {post.title}
    <br />
    {post.id}
    <br />
    <Date dateString={post.date} />
    <br />
    <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
  </Container>
  )
}

export default PostDetail
