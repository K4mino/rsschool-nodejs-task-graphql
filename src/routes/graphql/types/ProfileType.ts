import { GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString,GraphQLList } from "graphql";
import { UUIDType } from "./uuid.js";
import { MemberTypeIdGraphQL } from "./MemberType.js";
export const ProfileType = new GraphQLObjectType({
    name: 'ProfileType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        isMale: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        yearOfBirth: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        userId:{
            type: new GraphQLNonNull(UUIDType),
        },
        memberTypeId:{
            type: new GraphQLNonNull(MemberTypeIdGraphQL),
        }
    },
})