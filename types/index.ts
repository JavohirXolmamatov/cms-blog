export interface ChildProps {
  children: React.ReactNode;
}

export interface IAuthor {
  name: string;
  image: IImages;
  id: string;
  bio: string;
}

export interface ICategory {
  name: string;
  slug: string;
  id: string;
  blogs: IBlog[];
}

export interface ITag {
  name: string;
  slug: string;
  id: string;
  blogs: IBlog[];
}

export interface IImages {
  url: string;
}

export interface IBlog {
  title: string;
  description: string;
  author: IAuthor;
  createdAt: string;
  image: IImages;
  tag: ITag;
  category: ICategory;
  content: {
    html: string;
  };
  slug: string;
}
