import { gql } from '@apollo/client';
export const QUERY = gql`query step1($base64: String!){
    step1(base64: $base64){
        result{
            bbox
        }
    }
}`