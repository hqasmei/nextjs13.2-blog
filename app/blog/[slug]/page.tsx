import Link from "next/link"
import { getPostBySlug } from "../../../lib/mdx"

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { content } = await getPageContent(params.slug)

  return (
    <main className="mx-auto w-full flex  max-w-3xl flex-1">
      <div className="flex flex-col space-y-4 py-24 px-6 md:px-0  sm:py-28 md:space-y-0">
        <Link href="/blog">
          <div className="group flex flex-row space-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 group-hover:text-neutral-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
            <span className="text-lg group-hover:text-neutral-700">Back</span>
          </div>
        </Link>
        <div className="container py-4 prose prose-neutral-100 lg:prose-xl">
          {content}
        </div>
      </div>
    </main>
  )
}

export default Page
