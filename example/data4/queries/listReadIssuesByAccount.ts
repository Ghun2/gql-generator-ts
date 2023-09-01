import { gql } from '@apollo/client';
export const QUERY = gql`query listReadIssuesByAccount($accountId: Float, $listOption: ListOptionInputSchema){
    listReadIssuesByAccount(accountId: $accountId, listOption: $listOption){
        readIssueList{
            issueId
            accountId
            createdTime
            updatedTime
        }
        listLength
    }
}`