import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteEducatorByEmail($email: String!){
    deleteEducatorByEmail(email: $email)
}`