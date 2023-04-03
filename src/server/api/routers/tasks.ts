import { z } from "zod";

export const TaskCreateInput = z.object({
  title: z.string(),
  content: z.string(),
  assigneeId: z.string(),
});
export const TaskDeleteInput = z.object({
  id: z.string(),
});

import {
    createTRPCRouter,
    publicProcedure,
  } from "~/server/api/trpc";

  export const tasksRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
      return ctx.prisma.task.findMany();
    }),  
    createTask: publicProcedure.mutation(({ ctx, input }) => {
      const validatedInput = TaskCreateInput.parse(input);
      return ctx.prisma.task.create({
        data: validatedInput,
      });
    }),
    deleteTask: publicProcedure.mutation(({ ctx, input }) => {
      const validatedInput = TaskDeleteInput.parse(input);
      return ctx.prisma.task.delete({
        where: {
          id: validatedInput.id,
        },
      });
    }),
  });
  

  