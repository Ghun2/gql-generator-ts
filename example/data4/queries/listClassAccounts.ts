import { gql } from '@apollo/client';
export const QUERY = gql`query listClassAccounts($listOption: ListOptionInputSchema){
    listClassAccounts(listOption: $listOption){
        classAccountList{
            classId
            accountId
            createdTime
            updatedTime
        }
        listLength
    }
}`