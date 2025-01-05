// app/blog/blogpost/[slug]/ClientBlogPost.tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

type Post = {
  id: number
  title: string
  content: string
  date: string
  readingTime: string
}

export default function ClientBlogPost({ post }: { post: Post }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <article className="max-w-3xl mx-auto mt-12 max-md:p-10">
      <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center mb-8 group">
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
        Back to Blogs
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-between text-sm text-gray-400 mb-8">
        <span>{post.date}</span>
        <span>{post.readingTime}</span>
      </div>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}