import { gql } from '@apollo/client';
export const QUERY = gql`query selector2($base64: String!){
    selector2(base64: $base64){
        result{
            bbox
            label
        }
    }
}`