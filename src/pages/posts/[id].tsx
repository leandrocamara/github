import Head from 'next/Head'
import { ParsedUrlQuery } from 'node:querystring'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import { getAllPostIds, getPostData, PostData } from '../../utils/posts'
import Date from '../../components/Date'

interface Props {
  post: PostData
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>

      {post.title}
      <br />
      {post.id}
      <br />
      <Date dateString={post.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds().map(postId => {
    return { params: { id: postId } }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  const post = await getPostData(context.params.id)

  return { props: { post } }
}

interface Params extends ParsedUrlQuery {
  id: string
}

export default Post
