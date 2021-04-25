import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'public/posts')

export interface PostInfo {
  id: string
  title: string
  date: string
  contentHtml?: string
}

export class PostService {
  static getSortedPosts(): PostInfo[] {
    const fileNames = fs.readdirSync(postsDirectory)

    const allPostsData: PostInfo[] = fileNames.map(fileName => {
      const id = fileName.replace(/\.md$/, '')

      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const { title, date } = matter(fileContents).data

      return { id, title, date }
    })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  }

  static getAllPostIds(): string[] {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => fileName.replace(/\.md$/, ''))
  }

  static async getPost(id: string): Promise<PostInfo> {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)

    const { title, date } = matterResult.data
    const contentHtml = processedContent.toString()

    return { id, title, date, contentHtml }
  }
}
