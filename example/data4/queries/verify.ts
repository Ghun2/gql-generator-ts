import { gql } from '@apollo/client';
export const QUERY = gql`query verify($client: Client!, $accessToken: String!, $clientOrigin: ClientOriginInputSchema){
    verify(client: $client, accessToken: $accessToken, clientOrigin: $clientOrigin){
        id
    }
}`