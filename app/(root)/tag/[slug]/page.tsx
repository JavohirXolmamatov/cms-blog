import BlogCard from "@/components/cards/blog";
import { getBlogsByTag } from "@/service/tag.service";
import { IBlog } from "@/types";
import { Dot, Home } from "lucide-react";
import Link from "next/link";

async function TagSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tag =  await getBlogsByTag(slug);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[30vh] flex items-center justify-end flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound mt-2">
          <span>{tag?.name}</span>
        </h2>

        <div className="flex gap-1 items-center mt-4">
          <Home className="w-4 h-4" />
          <Link
            href={"/"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Home
          </Link>
          <Dot />
          <p className="text-muted-foreground">Tag</p>
        </div>
      </div>

      <div className="flex flex-col space-y-24 mt-24">
        {tag?.blogs &&
          tag?.blogs.map((blog: IBlog) => (
            <BlogCard key={blog?.title} {...blog} />
          ))}
      </div>
    </div>
  );
}

export default TagSlug;
