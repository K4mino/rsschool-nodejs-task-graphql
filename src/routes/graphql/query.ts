import { GraphQLList, GraphQLNonNull, GraphQLObjectType,GraphQLID } from "graphql";
import { Context } from "./types/Context.js";
import { MemberType, MemberTypeIdGraphQL } from "./types/MemberType.js";
import { PostType } from "./types/PostType.js";
import { UserType } from "./types/UserType.js";
import { UUIDType } from "./types/uuid.js";
export const RootQuery = new GraphQLObjectType<unknown,Context>({
    name:"RootQuery",
    fields: {
        memberTypes: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MemberType))),
            resolve: async(_,args,{ prisma }) => {
                try {
                    return await prisma.memberType.findMany();
                } catch (error) {   
                    console.log(error);
                }
            }
        },
        memberType: {
            type: new GraphQLNonNull(MemberType),
            args:{
                memberTypeId: {
                    type: new GraphQLNonNull(MemberTypeIdGraphQL),
                }
            },
            resolve: async(_,args,{ prisma }) => {
                try {
                    return await prisma.memberType.findUnique({where: {id: args.memberTypeId}});
                }catch (error) {
                    console.log(error);
                }
            }
        },
        users: {
            type:new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UserType))),
            resolve: async(_,args,{ prisma }) => {
                try {
                    return await prisma.user.findMany();
                }catch (error) {
                    console.log(error);
                }
            }
        },
        user:{
            type: UserType,
            args:{
                userId:{
                    type: new GraphQLNonNull(UUIDType),
                }
            },
            resolve: async(_,args,{ prisma }) => {
                try {
                    return await prisma.user.findUnique({where: {id: args.userId}});
                }catch (error) {
                    console.log(error);
                }
            }
        },
        posts:{
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(PostType))),
            resolve: async(_,args,{ prisma }) => {
                try {
                    return await prisma.post.findMany();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        post:{
            type: PostType,
            args:{
                postId:{
                    type: new GraphQLNonNull(UUIDType),
                }
            },
            resolve: async(_,args,{ prisma }) => {
                try {
                    return await prisma.post.findUnique({where: {id: args.postId}});
                }catch (error) {
                    console.log(error)
                }
            }
        }
    },
})