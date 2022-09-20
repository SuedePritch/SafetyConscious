import { gql } from '@apollo/client';

export const GET_ME = gql`
query user {
user {
    username
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

export const GET_FLHAS = gql`
query allFLHAs {
  allFLHAs {
    _id
    jobLocation
    supervisor
    primarytask
    user {
      username
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