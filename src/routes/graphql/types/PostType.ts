import { GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString ,GraphQLInputObjectType} from "graphql";
import { UUIDType } from "./uuid.js";
export const PostType = new GraphQLObjectType({
    name: 'PostType',
    fields:{
        id: {
            type: new GraphQLNonNull(UUIDType),    
        },
        title:{
            type: new GraphQLNonNull(GraphQLString),
        },
        content:{
            type: new GraphQLNonNull(GraphQLString),
        },
        authorId:{
            type: new GraphQLNonNull(UUIDType),
        }
    }
})


export const PostInputType = new GraphQLInputObjectType({
    name: 'PostInputType',
    fields:{
        title:{
            type: new GraphQLNonNull(GraphQLString),
        },
        content:{
            type: new GraphQLNonNull(GraphQLString),
        },
        authorId:{
            type: new GraphQLNonNull(UUIDType),
        }
    }
})