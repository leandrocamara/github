import React from 'react'

import Biography from '../Biography';
import { Container, Section, Title } from './styles';
import Posts from '../Posts';
import { PostInfo } from '../../services/PostService';

interface BlogProps {
  posts: PostInfo[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <Container>
      <main>
        <Biography
          name="Leandro Câmara"
          avatarUrl="https://avatars.githubusercontent.com/u/12851884?v=4"
          info="Hello, I’m Leandro. I’m a software engineer."
          linkedInUrl="https://www.linkedin.com/in/leandro-camara/"
        />
      </main>

      <Section>
        <Title>Blog</Title>
        <Posts posts={posts} />
      </Section>
    </Container>
  )
}

export default Blog
