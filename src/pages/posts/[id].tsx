import Head from 'next/head'
import Link from 'next/link'
import { ParsedUrlQuery } from 'node:querystring'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import Avatar from '../../components/Avatar'
import PostDetail from '../../components/Posts/PostDetail'
import { Container, ButtonBack } from '../../styles/pages/Post'
import { PostInfo, PostService } from '../../services/PostService'

interface PostPageProps {
  post: PostInfo
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <Container>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Avatar
        name="Leandro Câmara"
        avatarUrl="https://avatars.githubusercontent.com/u/12851884?v=4"
        imageSize="150px"
        titleColor="#ffffff"
        titleSize="28px"
      />

      <PostDetail post={post} />

      <ButtonBack>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </ButtonBack>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostService.getAllPostIds().map(postId => {
    return { params: { id: postId } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  const post = await PostService.getPost(context.params.id)

  return {
    props: {
      post
    }
  }
}

interface Params extends ParsedUrlQuery {
  id: string
}

export default PostPage
