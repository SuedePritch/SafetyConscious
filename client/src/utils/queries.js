import { gql } from '@apollo/client';

export const GET_ME = gql`
query user {
user {
    username
    email
    }
}
`;

export const GET_FLHAS = gql`
query allFLHAs {
  allFLHAs {
    _id
    jobLocation
    supervisor
    primarytask
    jobTask {
      _id
      task
      hazard
      control
    }
    dateCreated
  }
}`