import { gql } from '@apollo/client';
export const QUERY = gql`query listConversionIssuesUnifiedSearch($listOption: ListOptionInputSchema){
    listConversionIssuesUnifiedSearch(listOption: $listOption){
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
        listLength
    }
}`