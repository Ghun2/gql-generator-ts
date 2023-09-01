import { gql } from '@apollo/client';
export const QUERY = gql`query listMessages($pageNumber: Float, $numberPerPage: Float, $startDate: String, $limitDay: Float){
    listMessages(pageNumber: $pageNumber, numberPerPage: $numberPerPage, startDate: $startDate, limitDay: $limitDay){
        messageList{
            messageId
            type
            sender
            smsCount
            reserveState
            message
            failCount
            registeredDate
            reserveDate
        }
        nextYn
    }
}`