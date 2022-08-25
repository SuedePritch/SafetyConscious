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



    type FLHA {
        _id: ID,
        jobLocation: String,
        dateCreated: String
    }





type Query{
    user: User
    allFLHAs: [FLHA]
}
type Mutation {
    # USER
    addUser(username: String!, email: String! password: String!): Auth
    login(email: String!, password: String!): Auth

    #FLHA
    submitFLHA(jobLocation: String!): FLHA
}
`;



module.exports = typeDefs;
