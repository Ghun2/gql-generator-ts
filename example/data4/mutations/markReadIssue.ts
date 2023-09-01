import { gql } from '@apollo/client';
export const MUTATION = gql`mutation markReadIssue($issueId: Float, $accountId: Float){
    markReadIssue(issueId: $issueId, accountId: $accountId){
        readIssue{
            issueId
            accountId
            createdTime
            updatedTime
        }
    }
}`