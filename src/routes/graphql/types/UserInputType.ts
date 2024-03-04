import { GraphQLFloat, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLInputObjectType } from "graphql";
export const UserInputType = new GraphQLInputObjectType({
    name: 'UserInputType',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        balance: {
            type: new GraphQLNonNull(GraphQLFloat),
        }
    }
})