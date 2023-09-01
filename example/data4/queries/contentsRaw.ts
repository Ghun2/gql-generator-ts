import { gql } from '@apollo/client';
export const QUERY = gql`query contentsRaw($rawQuery: String!){
    contentsRaw(rawQuery: $rawQuery)
}`