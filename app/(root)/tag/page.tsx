import { Dot, Home } from "lucide-react";
import Link from "next/link";
import { getTags } from "@/service/tag.service";

const Page = async () => {
  const tags = await getTags();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[30vh] flex items-center justify-end flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound mt-2">
          <span>Tags</span>
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
          <p className="text-muted-foreground">Tags</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {tags?.map((tag) => (
          <Link
            key={tag.slug}
            href={`/tag/${tag.slug}`}
            className="group relative overflow-hidden bg-muted dark:bg-muted/50 rounded-xl p-6 flex flex-col items-center justify-center gap-3 border border-transparent hover:border-blue-500/50 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-all duration-300"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/10 dark:group-hover:from-blue-500/10 dark:group-hover:to-purple-500/20 transition-all duration-300 rounded-xl" />

            {/* Icon placeholder */}
            <div className="w-12 h-12 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-xl">📁</span>
            </div>

            {/* Name */}
            <p className="font-creteRound text-lg text-center group-hover:text-blue-500 transition-colors duration-300">
              {tag.name}
            </p>

            {/* Blog count */}
            <span className="text-xs text-muted-foreground bg-background dark:bg-muted rounded-full px-3 py-1">
              {tag?.blogs?.length || 0} posts
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
