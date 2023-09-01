import { gql } from '@apollo/client';
export const MUTATION = gql`mutation confirmEmailVerificationCode($email: String!, $verificationCode: String!){
    confirmEmailVerificationCode(email: $email, verificationCode: $verificationCode)
}`