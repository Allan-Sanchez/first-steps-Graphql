import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";


const typeDefs = `
    type Query{
        hello:String
        greet(name:String!): String
        task:[Task]
        Users:[User]
    }

    type Task{
        _id:ID
        title:String!
        description:String!
        number:Int
    }

    type User{
        _id:ID
        firstName:String!
        lastName:String!
        age:Int!
    }

    type Mutation{
        createTask(input: Taskinput): Task
        createUser(input: userInput): User
        deleteUser(_id:ID):User
        updateUser(_id:ID, input:userInput): User
    }

    input Taskinput{
        title:String!
        description:String!
        number:Int
    }

    input userInput{
        firstName:String!
        lastName:String!
        age:Int
    }
`;

export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
});