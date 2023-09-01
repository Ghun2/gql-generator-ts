import { gql } from '@apollo/client';
export const MUTATION = gql`mutation educatorLogin($educator: EducatorInputSchema, $email: String!, $verificationCode: String!){
    educatorLogin(educator: $educator, email: $email, verificationCode: $verificationCode){
        isConfirmed
        token{
            accessToken
            issuedTime
            refreshToken
        }
    }
}`