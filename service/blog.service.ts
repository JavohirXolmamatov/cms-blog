import { IBlog } from "@/types";
import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
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
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query);
  return blogs;
};
