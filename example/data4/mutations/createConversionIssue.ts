import { gql } from '@apollo/client';
export const MUTATION = gql`mutation createConversionIssue($conversionIssue: ConversionIssueInputSchema){
    createConversionIssue(conversionIssue: $conversionIssue){
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