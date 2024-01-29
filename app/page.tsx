import Image from "next/image"
import { client } from "./lib/sanity"
import { BlogCard } from "./lib/interface"
import BlogItemCard from "@/components/blogs/BlogItemCard"
import { blogs } from "@/data/blogs"

async function getBlogs() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      categories,
      content,
      "currentSlug": slug.current,
      coverImage,
      shortDescription
  }`

  //const data = await client.fetch(query)

  const data = blogs
  return data
}

export default async function Home() {
  const blogs: BlogCard[] = await getBlogs()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-8">
      {blogs.map((blog, index) => (
        <div key={index}>
          <BlogItemCard blog={blog} key={index} />
        </div>
      ))}
    </div>
  )
}
