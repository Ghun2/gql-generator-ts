import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteBinderByID($binderId: String!){
    deleteBinderByID(binderId: $binderId)
}`