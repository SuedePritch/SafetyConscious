const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input SafetyTicketInput{
        ticket:String
        expirationDate: String
    } 
    type SafetyTicket {
        _id: ID
        ticket: String
        expirationDate: String
    } 
    type User {
    _id: ID
    firstname:String
    lastname:String
    email: String
    password: String
    company: Company
    safetytickets: [SafetyTicket]
    }
    type Auth {
        token: ID!
        user: User
    }

    type Company{
        _id: ID 
        company: String
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
    companies: [Company]
    flhasByUser: [FLHA]
    allFLHAs: [FLHA]
    allJobTasks: [FLHA]
    employees:[User]
}
type Mutation {
    # USER
    addUser(firstname:String!, lastname:String, email: String!, password: String!, company:ID!): Auth
    login(email: String!, password: String!): Auth
    #Company
    addCompany(company:String!):Company
    #Safety Tickets
    addSafetyTicket(
        user:ID,
        safetyticket:[SafetyTicketInput] 
    ): User
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
