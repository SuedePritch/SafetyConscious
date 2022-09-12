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
        _id:ID,
        task: String,
        hazard: String,
        control:String,
    }
    
    type FLHA {
        _id: ID,
        user: User,
        jobLocation: String,
        supervisor: String,
        primarytask: String,
        jobTask:[JobTask],
        dateCreated: String,
        isApproved: Boolean
    }
    
    





type Query{
    user: User
    allFLHAs: [FLHA]
    allJobTasks: [FLHA]
}
type Mutation {
    # USER
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    #FLHA
    submitFLHA(
        user: ID,
        jobLocation: String!,
        supervisor: String!, 
        primarytask: String!, 
        isApproved: Boolean,
        jobTask:[JobTaskInput]
        ): FLHA

    #Approve FLHA
    approveFLHA(
        _id: ID!,
        isApproved: Boolean
    ): FLHA
}
`;



module.exports = typeDefs;
