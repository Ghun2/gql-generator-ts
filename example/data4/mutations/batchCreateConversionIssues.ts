import { gql } from '@apollo/client';
export const MUTATION = gql`mutation batchCreateConversionIssues($conversionIssueList: [ConversionIssueInputSchema!]!){
    batchCreateConversionIssues(conversionIssueList: $conversionIssueList){
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