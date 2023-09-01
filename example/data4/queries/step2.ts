import { gql } from '@apollo/client';
export const QUERY = gql`query step2($base64: String!){
    step2(base64: $base64){
        result{
            bbox
        }
    }
}`