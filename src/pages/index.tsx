import Head from 'next/head'
import { GetStaticProps } from 'next'

import Blog from '../components/Blog'
import { Container } from '../styles/pages/Home'
import RocketseatLogo from '../assets/images/rocketseat.svg'
import { PostInfo, PostService } from '../services/PostService'

interface HomePageProps {
  posts: PostInfo[]
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Blog posts={posts} />

      <RocketseatLogo />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = PostService.getSortedPosts()

  return {
    props: {
      posts
    }
  }
}

export default HomePage
