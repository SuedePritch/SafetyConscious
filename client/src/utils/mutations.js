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
    mutation submitFLHA($jobLocation: String!, $supervisor: String!, $primarytask: String!, $jobTask: [JobTaskInput]) {
    submitFLHA(jobLocation: $jobLocation, supervisor: $supervisor, primarytask: $primarytask, jobTask: $jobTask) {
        _id
        jobLocation
        supervisor
        primarytask
        jobTask {
            task
            hazard
            control
        }
        dateCreated
}
}
`;
