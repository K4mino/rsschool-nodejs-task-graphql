import { GraphQLList, GraphQLNonNull, GraphQLObjectType,GraphQLID, GraphQLString, GraphQLFloat } from "graphql";
import { Context } from "./types/Context.js";
import { PostInputType, PostType } from "./types/PostType.js";
import { UserInputType } from "./types/UserInputType.js";
import { UserType } from "./types/UserType.js";
import { UUIDType } from "./types/uuid.js";

export const RootMutation = new GraphQLObjectType<unknown,Context>({
    name:"RootMutation",
    fields:{
        createUser:{
            type: UserType,
            args:{
                dto:{
                    type: new GraphQLNonNull(UserInputType)
                }
            },
            resolve: async(_,args,{ prisma }) => {
                try {
                    const newUser = await prisma.user.create({
                        data:{
                            name: args.name,
                            balance: args.balance
                        }
                    })
                    return newUser
                } catch (error) {
                    console.log(error);
                }
            }
        },
        createPost:{
            type:PostType,
            args:{
                dto:{
                    type: new GraphQLNonNull(PostInputType)
                }
            },
            resolve: async(_,args,{ prisma }) => {
                try {
                    return await prisma.post.create({
                        data:{
                            title: args.title,
                            content: args.content,
                            authorId: args.authorId
                        }
                    })
                }catch (error) {
                    console.log(error);
                }
            }
        }
    }
})