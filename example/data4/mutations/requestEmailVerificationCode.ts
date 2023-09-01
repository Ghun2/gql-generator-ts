import { gql } from '@apollo/client';
export const MUTATION = gql`mutation requestEmailVerificationCode($email: String!){
    requestEmailVerificationCode(email: $email)
}`