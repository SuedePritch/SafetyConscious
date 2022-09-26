import { gql } from '@apollo/client';

export const GET_ME = gql`
query user {
user {
    firstname
    lastname
    email
    }
}
`;

export const GET_COMPANIES = gql`
query companies{
  companies{
    _id 
    company
  }
}
`
export const GET_EMPLOYEES = gql`
query employees{
  employees{
    _id
    firstname
    lastname
    email
    password
    safetytickets {
      ticket
      expirationDate
    }
    company {
      _id
      company
    }
  }
}
`

export const GET_FLHAS = gql`
query allFLHAs {
  allFLHAs {
    _id
    jobLocation
    supervisor
    primarytask
    user {
      firstname
      lastname
      email
    }
    jobTask {
      _id
      task
      hazard
      control
    }
    dateCreated
    isApproved
  }
}`