import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

const rootDirectory = path.join(process.cwd(), "content")

type PostMeta = {
  title?: string
  author?: string
  publishDate?: string
  description?: string
  image?: string
  minuteRead?: string
  slug?: string
}

type Post = {
  meta: PostMeta
  content: any
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.mdx$/, "")
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
  const files = await fs.promises.readdir(rootDirectory)

  let posts: PostMeta[] = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}
