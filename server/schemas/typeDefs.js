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


    type JobTask{
        _id:ID!,
        task: String,
        hazard: String,
        control:String,
    }
    type FLHA {
        _id: ID,
        jobLocation: String,
        supervisor: String,
        primarytask: String,
        jobTask: [ID],
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
    createJobTask(task:String!, hazard:String!, control:String!): JobTask
    submitFLHA(jobLocation: String!, supervisor: String!, primarytask: String!, jobTask:[ID]!): FLHA
}
`;



module.exports = typeDefs;
