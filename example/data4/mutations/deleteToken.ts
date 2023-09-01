import { gql } from '@apollo/client';
export const MUTATION = gql`mutation deleteToken($client: Client!, $refreshToken: String!){
    deleteToken(client: $client, refreshToken: $refreshToken)
}`