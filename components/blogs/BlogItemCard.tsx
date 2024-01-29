"use client"

import { Link } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { BlogCard } from "@/app/lib/interface"
import Image from "next/image"
import { urlFor } from "@/app/lib/sanity"

interface Props {
  blog: BlogCard
}

export default function BlogItemCard(props: Props) {
  const { blog } = props
  console.log(blog.coverImage)
  return (
    <Card>
      <CardContent className="mt-5">
        <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
        {!!blog.coverImage && (
          <Image
            src={urlFor(blog.coverImage).url()}
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />
        )}
        <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
          {blog.shortDescription}
        </p>
        <Button asChild className="w-full mt-7">
          <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
