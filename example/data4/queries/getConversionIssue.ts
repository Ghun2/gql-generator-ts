import { gql } from '@apollo/client';
export const QUERY = gql`query getConversionIssue($issueId: Float){
    getConversionIssue(issueId: $issueId){
        conversionIssue{
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