import { GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { GraphQLEnumType } from "graphql/type/definition.js";
import { MemberTypeId } from "../../member-types/schemas.js";
export const MemberType = new GraphQLObjectType({
    name: 'MemberType',
    fields:{
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        discount: { 
            type: new GraphQLNonNull(GraphQLFloat),
        },
        postsLimitPerMonth: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
})

export const MemberTypeIdGraphQL = new GraphQLEnumType({
    name: 'MemberTypeId',
    values:{
        [MemberTypeId.BASIC]:{
            value: MemberTypeId.BASIC,
        },
        [MemberTypeId.BUSINESS]:{
            value: MemberTypeId.BUSINESS,
        }
    }
})