import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createToken($client: Client!, $id: Float!, $clientOrigin: ClientOriginInputSchema){
    createToken(client: $client, id: $id, clientOrigin: $clientOrigin){
        authToken{
            accessToken
            issuedTime
            refreshToken
        }
    }
}`