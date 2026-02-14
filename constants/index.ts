import {
  Contact2Icon,
  FileCode2,
  FolderArchive,
  Home,
  ListCollapse,
} from "lucide-react";

export const navLinks = [
  { name: "Home", route: "/", icon: Home },
  { name: "About", route: "/about", icon: ListCollapse },
  { name: "Blogs", route: "/blogs", icon: FileCode2 },
  { name: "Archive", route: "/archive", icon: FolderArchive },
  { name: "Contact", route: "/contact", icon: Contact2Icon },
];

export const popularTags = [
  { name: "ReactJS", slug: "react-js" },
  { name: "Javascript", slug: "javascript" },
  { name: "NodeJS", slug: "node-js" },
  { name: "NextJS", slug: "next-js" },
];

export const popularCategories = [
  { name: "Frontend", slug: "frontend" },
  { name: "Backend", slug: "backend" },
  { name: "Fullstack", slug: "fullstack" },
  { name: "Sun'iy Intellect", slug: "artificial-intellect" },
];
