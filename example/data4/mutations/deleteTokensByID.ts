import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteTokensByID($client: Client!, $id: Float!){
    deleteTokensByID(client: $client, id: $id)
}`