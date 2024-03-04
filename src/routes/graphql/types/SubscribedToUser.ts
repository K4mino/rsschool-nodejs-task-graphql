import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";
export const subscribedToUsersType = new GraphQLObjectType({
    name: 'SubscribedToUsers',
    fields: {
        id: {
            type: new GraphQLNonNull(UUIDType),
        },
        name: {
            type: new GraphQLNonNull(UUIDType),
        },
    },
})