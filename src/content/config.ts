import { z, defineCollection } from 'astro:content';
// import { gql, GraphQLClient } from 'graphql-request';

// const graphql = new GraphQLClient('https://ommi-strapi-base.onrender.com/graphql');

// const gqlQuery = gql`
//   {
//     menuItems {
//       data {
//         id
//         attributes {
//           itemName
//           itemDescription
//           itemPrice
//           item_category {
//             data {
//               id
//               attributes {
//                 categoryName
//                 categoryDescription
//                 categorySubtext
//               }
//             }
//           }
//           item_image {
//             data {
//               id
//               attributes {
//                 url
//               }
//             }
//           }
//           item_tags {
//             data {
//               id
//               attributes {
//                 tagName
//                 tagColorHEX
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const menuItems = defineCollection({
//   loader: async () => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const { menuItems }: any = await graphql.request(gqlQuery);

//     return menuItems;
//   },
// })

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
  // menuItems: menuItems,
};
