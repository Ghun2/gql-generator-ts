import { gql } from '@apollo/client';
export const QUERY = gql`query solveRaw($rawQuery: String!){
    solveRaw(rawQuery: $rawQuery)
}`