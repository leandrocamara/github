import React from 'react'

import Post from './PostSummary'
import { Container, Item, List } from './styles'
import { PostInfo } from '../../services/PostService'

interface PostsProps {
  posts: PostInfo[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <Container>
      <List>
        {posts.map(post => (
          <Item key={post.id}>
            <Post post={post} />
          </Item>
        ))}
      </List>
    </Container>
  )
}

export default Posts
