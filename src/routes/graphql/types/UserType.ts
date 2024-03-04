import { GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { PostType } from "./PostType.js";
import { ProfileType } from "./ProfileType.js";
export const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        balance: {
            type: new GraphQLNonNull(GraphQLFloat),
        },
        profile:{
            type: new GraphQLNonNull(ProfileType),
        },
        posts:{
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostType))),
        }
    },
})