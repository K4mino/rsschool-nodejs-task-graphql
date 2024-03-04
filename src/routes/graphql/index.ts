import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { graphql, GraphQLSchema } from 'graphql';
import { RootQuery } from './query.js';
import { Context } from './types/Context.js';
import { RootMutation } from './mutation.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const {prisma} = fastify;
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },

  
    async handler(req) {

      const contextValue:Context = {
        prisma
      };

      return graphql({
        schema,
        source: req.body.query,
        variableValues: req.body.variables,
        contextValue,
      })
    },
  });
};

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation:RootMutation
});

export default plugin;
