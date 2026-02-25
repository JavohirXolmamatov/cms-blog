"use client";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { popularCategories, popularTags } from "@/constants";
import { getSearchBlogs } from "@/service/blog.service";
import { IBlog } from "@/types";
import { Loader2, Minus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { debounce } from "lodash";
import SearchCard from "@/components/cards/search";
import { Separator } from "@/components/ui/separator";

function GlobalSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const handleSearch = async (text: string) => {
    setIsLoading(true);
    try {
      if (text && text.length > 2) {
        const blogs = await getSearchBlogs(text);
        setBlogs(blogs);
        setIsLoading(false);
      } else {
        setBlogs([]);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const debouncedSearch = debounce(handleSearch, 500);

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="hover:bg-blue-400/20 py-2 px-3 gap-1 cursor-pointer rounded-sm transition-colors flex items-center ">
          <span className="hidden md:flex">Search</span>
          <Search className="w-4 h-4" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <div className="container max-w-6xl mx-auto py-12">
          <Input
            placeholder="Type to search blog..."
            className="bg-secondary"
            onChange={(e) => debouncedSearch(e.target.value.toLowerCase())}
            disabled={isLoading}
          />
          {isLoading && (
            <Loader2 className="w-8 h-8 mt-4 animate-spin mx-auto" />
          )}
          {blogs.length ? (
            <div className="text-2xl font-creteRound mt-8">
              Search Result: {blogs.length}
            </div>
          ) : null}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2 ">
            {blogs &&
              blogs.map((blog) => <SearchCard key={blog?.slug} {...blog} />)}
          </div>

          {blogs.length ? <Separator className="my-4" /> : null}

          <div className="flex flex-col space-y-2 mt-4">
            <p className="font-creteRound text-2xl">See posts by categories</p>
            <div className="flex flex-wrap gap-2">
              {popularCategories &&
                popularCategories.map((category) => (
                  <Link href={`/category/${category.slug}`} key={category.slug}>
                    <Badge key={category.slug} variant={"secondary"}>
                      {category.name}
                    </Badge>
                  </Link>
                ))}
              <Minus className="w-8 h-8" />
              <Link
                href="/category"
                className="underline text-blue-500 hover:text-blue-500/80 font-creteRound"
              >
                <DrawerClose className="underline">See all</DrawerClose>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <p className="font-creteRound text-2xl">See posts by tags</p>
            <div className="flex flex-wrap gap-2 items-center">
              {popularTags &&
                popularTags?.map((tag) => (
                  <Link href={`/tag/${tag.slug}`} key={tag.slug}>
                    <Badge key={tag?.slug} variant={"secondary"}>
                      {tag?.name}
                    </Badge>
                  </Link>
                ))}

              <Minus className="w-8 h-8" />
              <Link
                href="/tag"
                className="underline text-blue-500 hover:text-blue-500/80 font-creteRound"
              >
                <DrawerClose className="underline">See all</DrawerClose>
              </Link>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default GlobalSearch;
