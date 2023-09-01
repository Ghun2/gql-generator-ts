import { gql } from '@apollo/client';
export const MUTATION = gql`mutation refreshAccessToken($client: Client!, $refreshToken: String!, $clientOrigin: ClientOriginInputSchema){
    refreshAccessToken(client: $client, refreshToken: $refreshToken, clientOrigin: $clientOrigin){
        accessToken
    }
}`