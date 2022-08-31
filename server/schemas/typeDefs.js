const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    username: String
    email: String
    password: String
    }
    type Auth {
        token: ID!
        user: User
    }


    input JobTaskInput{
        task: String,
        hazard: String,
        control:String,
    }
    type JobTask{
        task: String,
        hazard: String,
        control:String,
    }
    
    type FLHA {
        _id: ID,
        jobLocation: String,
        supervisor: String,
        primarytask: String,
        jobTask:[JobTask],
        dateCreated: String
    }
    
    





type Query{
    user: User
    allFLHAs: [FLHA]
}
type Mutation {
    # USER
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    #FLHA
    submitFLHA(
        jobLocation: String!,
        supervisor: String!, 
        primarytask: String!, 
        jobTask:[JobTaskInput]): FLHA
}
`;



module.exports = typeDefs;
