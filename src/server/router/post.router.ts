import { createRouter } from "./context";
import { z } from "zod";

export const postRouter = createRouter()
  .query("getPostsByType", {
    input: z.object({
      type: z.string(),
    }),
    async resolve({ input, ctx }) {
      return ctx.prisma.posts.findMany({
        where: {
          type: input.type,
          deleted_at: {
            not: null,
          },
        },
      });
    },
  })
  .query("getPostByID", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      return ctx.prisma.posts.findFirst({
        where: {
          id: input.id,
          deleted_at: {
            not: null,
          },
        },
      });
    },
  })
  .mutation("createPost", {
    input: z.object({
      title: z.string(),
      content: z.string(),
      type: z.string(),
    }),
    async resolve({ input, ctx }) {
      return ctx.prisma.posts.create({
        data: {
          title: input.title,
          content: input.content,
          type: input.type,
          authorId: ctx.session?.user?.id,
        },
      });
    },
  })
  .mutation("updatePostByID", {
    input: z.object({
      id: z.string(),
      title: z.string(),
      content: z.string(),
      type: z.string(),
    }),
    async resolve({ input, ctx }) {
      return ctx.prisma.posts.update({
        data: {
          title: input.title,
          content: input.content,
          type: input.type,
          authorId: ctx.session?.user?.id,
        },
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation("deletePostByID", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      return ctx.prisma.posts.update({
        data: {
          deleted_at: new Date(),
        },
        where: {
          id: input.id,
        },
      });
    },
  });
