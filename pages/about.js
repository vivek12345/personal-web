import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function About({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          {/* <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <h1>Hi, I'm Vivek Nayyar</h1>
            <h3>
              Front-End Engineer with 5 years' of experience building products for numerous domains
              like real estate, video-streaming, Fin-Tech and now e-commerce.
            </h3>
          </div> */}
          <div className="pt-8 pb-8 dark:prose-dark max-w-none xl:col-span-2">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { slug, date, title, summary, tags } = frontMatter
                return (
                  <li key={slug} className="py-12">
                    <article>
                      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>
                              {new Date(date).toLocaleDateString(
                                siteMetadata.locale,
                                postDateTemplate
                              )}
                            </time>
                          </dd>
                        </dl>
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                  href={`/blog/${slug}`}
                                  className="text-gray-900 dark:text-gray-100"
                                >
                                  {title}
                                </Link>
                              </h2>
                              <div className="flex flex-wrap">
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </div>
                            </div>
                            <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                              {summary}
                            </div>
                          </div>
                          <div className="text-base font-medium leading-6">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                              aria-label={`Read "${title}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {posts.length > MAX_DISPLAY && (
              <div className="flex justify-end text-base font-medium leading-6">
                <Link
                  href="/blog"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label="all posts"
                >
                  All Posts &rarr;
                </Link>
              </div>
            )}
          </div>
          <div className="flex flex-col items-baseline pt-8 space-x-2 text-xl">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <p className="text-gray-500 dark:text-gray-400 pb-6 pt-10">
              <span role="img" aria-label="hand waving emoji" className="mr-3">
                👋&nbsp;
              </span>
              My name is Vivek Nayyar
            </p>
            <p className="text-gray-500 dark:text-gray-400 pb-6">
              <span role="img" aria-label="laptop emoji" className="mr-3">
                💻&nbsp;
              </span>
              I work as a Senior Software Engineer with Zalando
            </p>
            <p className="text-gray-500 dark:text-gray-400 pb-6">
              <span role="img" aria-label="loud speaker emoji" className="mr-3">
                📢&nbsp;
              </span>
              Follow me{' '}
              <a href="https://www.dropbox.com/s/aklxs1asyxkejsw/Vivek%27s%20Resume.pdf?dl=1">
                @viveknayyar09
              </a>
            </p>
            <p className="text-gray-500 dark:text-gray-400 pb-5">
              <span role="img" aria-label="note taking emoji" className="mr-3">
                📝&nbsp;
              </span>
              <a href="https://www.dropbox.com/s/u4m4892pxpmjbgc/Vivek%27s%20%202019%20Resume.pdf?dl=1">
                <span>Download Resume</span>
              </a>
            </p>
            <div className="pt-10">
              <span role="img" aria-label="robot emoji">
                🤖 &nbsp;
              </span>
              <span role="img" aria-label="flight emoji">
                ✈️&nbsp;
              </span>
              <span role="img" aria-label="speaker emoji">
                🔈&nbsp;
              </span>
              <span role="img" aria-label="football emoji">
                ⚽️
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
