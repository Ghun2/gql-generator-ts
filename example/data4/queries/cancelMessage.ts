import { gql } from '@apollo/client';
export const QUERY = gql`query cancelMessage($messageId: String!){
    cancelMessage(messageId: $messageId){
        cancelDate
    }
}`