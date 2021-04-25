import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'
import { PostData, getSortedPostsData } from '../utils/posts'
import Date from '../components/Date'

interface Props {
  posts: PostData[]
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <RocketseatLogo />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Rockeseat.</p>
      </main>

      <section>
        <h2>Blog</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={post.date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}

export default Home
