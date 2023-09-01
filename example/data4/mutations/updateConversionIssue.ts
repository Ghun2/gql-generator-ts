import { gql } from '@apollo/client';
export const MUTATION = gql`mutation updateConversionIssue($conversionIssue: ConversionIssueInputSchema){
    updateConversionIssue(conversionIssue: $conversionIssue){
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