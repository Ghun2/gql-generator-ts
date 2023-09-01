import { gql } from '@apollo/client';
export const QUERY = gql`query listConversionIssuesByAccount($accountId: Float, $listOption: ListOptionInputSchema){
    listConversionIssuesByAccount(accountId: $accountId, listOption: $listOption){
        conversionIssueList{
            issueId
            sender
            receiver
            message
            target
            status
            conversionIssueReplyList{
                issueReplyId
                issueId
                sender
                message
                createdTime
                updatedTime
            }
            createdTime
            updatedTime
        }
    }
}`