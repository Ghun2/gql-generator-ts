import { gql } from '@apollo/client';
export const QUERY = gql`query treatmentRect($base64: String!){
    treatmentRect(base64: $base64){
        result{
            bbox
        }
    }
}`