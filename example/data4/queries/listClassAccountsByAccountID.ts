import { gql } from '@apollo/client';
export const QUERY = gql`query listClassAccountsByAccountID($accountId: Float!, $listOption: ListOptionInputSchema){
    listClassAccountsByAccountID(accountId: $accountId, listOption: $listOption){
        classAccountList{
            classId
            accountId
            createdTime
            updatedTime
        }
        listLength
    }
}`