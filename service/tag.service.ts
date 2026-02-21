import { IBlog, ITag } from "@/types";
import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogsByTag = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
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

  const { tag } = await request<{ tag: { blogs: IBlog[]; name: string } }>(
    graphqlAPI,
    query,
    { slug },
  );
  return tag;
};

export const getTags = async () => {
  const query = gql`
    query MyQuery {
      tags {
        name
        slug
        id
        blogs {
          title
        }
      }
    }
  `; // ✅ query yopildi

  const { tags } = await request<{ tags: ITag[] }>(graphqlAPI, query);
  return tags;
};
