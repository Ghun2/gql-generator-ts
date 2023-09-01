import { gql } from '@apollo/client';
export const QUERY = gql`query rdsRaw($rawQuery: String!){
    rdsRaw(rawQuery: $rawQuery)
}`