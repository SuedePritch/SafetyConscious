import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            firstname
            lastname
            password
            email
        }
    }
    }
`

export const ADD_USER = gql`
    mutation addUser($firstname: String!, $email: String!, $password: String!, $lastname: String, $company: ID!) {
  addUser(firstname: $firstname, email: $email, password: $password, lastname: $lastname, company: $company) {
    token
    user {
      _id
      firstname
      lastname
      email
      password
      company {
        company
      }
    }
  }
}
`

export const  ADD_COMPANY = gql`
mutation addCompany($company: String!) {
  addCompany(company: $company) {
    _id
    company
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
        firstname
        lastname
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
`
export const ADD_SAFETY_TICKET = gql`
mutation Mutation($user: ID, $safetyticket: [SafetyTicketInput]) {
  addSafetyTicket(user: $user, safetyticket: $safetyticket) {
    _id
    firstname
    lastname
    email
    password
    company {
      _id
      company
    }
    safetytickets {
      _id
      ticket
      expirationDate
    }
  }
}`;
