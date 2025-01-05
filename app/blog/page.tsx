import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: "Mastering CSS Grid Layout",
    excerpt: "Learn how to create complex layouts with CSS Grid and improve your web design skills.",
    date: "2023-05-20",
    slug: "mastering-css-grid-layout",
    readingTime: "8 min read"
  },
  {
    id: 2,
    title: "Async/Await in JavaScript",
    excerpt: "Dive into asynchronous JavaScript and learn how to write cleaner, more efficient code.",
    date: "2023-05-18",
    slug: "async-await-in-javascript",
    readingTime: "6 min read"
  },
  {
    id: 3,
    title: "React Hooks: useState and useEffect",
    excerpt: "Explore the power of React Hooks and how they can simplify your component logic.",
    date: "2023-05-15",
    slug: "react-hooks-usestate-and-useeffect",
    readingTime: "7 min read"
  },
  {
    id: 4,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    date: "2023-05-12",
    slug: "future-of-web-development",
    readingTime: "5 min read"
  },
  {
    id: 5,
    title: "Mastering Next.js: Tips and Tricks",
    excerpt: "Learn advanced techniques to take your Next.js applications to the next level.",
    date: "2023-05-10",
    slug: "mastering-nextjs-tips-and-tricks",
    readingTime: "7 min read"
  },
  {
    id: 6,
    title: "The Power of Server-Side Rendering",
    excerpt: "Discover how server-side rendering can improve your web application's performance and SEO.",
    date: "2023-05-05",
    slug: "power-of-server-side-rendering",
    readingTime: "6 min read"
  }
]

export default function BlogHome() {
  return (
    <div className="space-y-8 bg-black mb-10 mt-10 p-10 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
        Featured Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="bg-[#0E0E0E] border-gray-800 transition-all duration-300 ease-in-out hover:bg-primary/10 hover:border-gray-700 hover:shadow-2xl hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-gray-800">
              <Link
                href={`/blog/blogpost/${post.slug}`}
                className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 flex items-center group"
              >
                Read more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

