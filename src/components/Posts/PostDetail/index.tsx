import React from 'react'

import { Article, Container, ContentHtml, LightText, Title } from './styles'
import Date from '../../../shared/Date'
import { PostInfo } from '../../../services/PostService'

interface PostDetailProps {
  post: PostInfo
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <Container>
      <Article>
        <Title>{post.title}</Title>
        <LightText>
          <Date dateString={post.date} />
        </LightText>
        <ContentHtml dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </Article>
    </Container>
  )
}

export default PostDetail
