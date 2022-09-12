import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            username
            password
            email
        }
    }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`
export const CREATE_JOB_TASK = gql`
mutation createJobTask($task: String!, $hazard: String!, $control: String!) {
  createJobTask(task: $task, hazard: $hazard, control: $control) {
    _id
    task
    hazard
    control
  }
}
`

export const FLHA_FORM_SUBMIT = gql`
    mutation submitFLHA($jobLocation: String!, $supervisor: String!, $primarytask: String!, $user: ID, $isApproved: Boolean, $jobTask: [JobTaskInput]) {
    submitFLHA(jobLocation: $jobLocation, supervisor: $supervisor, primarytask: $primarytask, user: $user, isApproved: $isApproved, jobTask: $jobTask) {
    _id
    user {
        username
        email
    }
    jobLocation
    supervisor
    primarytask
    jobTask {
        task
        hazard
        control
    }
    dateCreated
    isApproved
    }
}
`
export const APPROVE_FLHA = gql`
mutation approveFLHA($id: ID!, $isApproved: Boolean) {
    approveFLHA(_id: $id, isApproved: $isApproved) {
        isApproved
        dateCreated
    }
}

`;
