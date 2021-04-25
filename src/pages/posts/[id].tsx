import Head from 'next/head'
import { ParsedUrlQuery } from 'node:querystring'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import { Container } from '../../styles/pages/Post'
import PostDetail from '../../components/Posts/PostDetail'
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

      <PostDetail post={post} />
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
