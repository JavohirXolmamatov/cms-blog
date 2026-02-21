import { IBlog, ICategory } from "@/types";
import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogsByCategory = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        name
        blogs {
          title
          createdAt
          author {
            id
            bio
            image {
              url
            }
            name
          }
          category {
            id
            slug
            name
          }
          tag {
            name
            id
            slug
          }
          description
          image {
            url
          }
          content {
            html
          }
          slug
        }
      }
    }
  `; // ✅ query yopildi

  const { category } = await request<{
    category: { blogs: IBlog[]; name: string };
  }>(graphqlAPI, query, { slug });
  return category;
};

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        name
        slug
        id
        blogs {
          title
        }
      }
    }
  `; // ✅ query yopildi

  const { categories } = await request<{ categories: ICategory[] }>(
    graphqlAPI,
    query,
  );
  return categories;
};
