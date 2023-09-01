import { gql } from '@apollo/client';
export const QUERY = gql`query getMessage($messageId: String!, $pageNumber: Float, $numberPerPage: Float){
    getMessage(messageId: $messageId, pageNumber: $pageNumber, numberPerPage: $numberPerPage){
        messageDetailList{
            messageDetailId
            type
            sender
            phoneNumber
            state
            registeredDate
            sendDate
            reserveDate
        }
        nextYn
    }
}`